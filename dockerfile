# Stage 1: Install All Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Install openssl (required for Prisma)
RUN apk add --no-cache openssl

COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

# Install all dependencies (including devDependencies for build)
RUN npm ci && npm cache clean --force

# Generate Prisma Client
RUN npx prisma generate

# Stage 2: Create Production Dependencies (Pruned)
FROM deps AS prod-deps
WORKDIR /app
# Remove devDependencies
RUN npm prune --production && npm cache clean --force

# Stage 3: Build Application
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/prisma ./prisma
COPY . .

RUN npm run build

# Stage 4: Production Image
FROM node:20-alpine AS production
WORKDIR /app

# Install system dependencies (wget for healthcheck, openssl for Prisma)
RUN apk add --no-cache wget openssl

COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

# Copy PRODUCTION node_modules from prod-deps stage
COPY --from=prod-deps /app/node_modules ./node_modules

# Copy build artifacts
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3002

# Health check
HEALTHCHECK --interval=30s --timeout=15s --start-period=120s --retries=5 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3002/health || exit 1

# Start command
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
