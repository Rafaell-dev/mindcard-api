# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Copia apenas package files pra aproveitar cache do Docker
COPY package*.json ./
COPY prisma ./prisma/

# Instala TODAS as dependências (precisa das devDependencies pro build)
RUN npm ci && \
    npm cache clean --force

# Gera Prisma Client
RUN npx prisma generate

# Stage 2: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copia node_modules do stage anterior
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/prisma ./prisma

# Copia código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Stage 3: Production
FROM node:20-alpine AS production
WORKDIR /app

# Instala wget pro healthcheck (mais confiável)
RUN apk add --no-cache wget

# Copia package files e instala APENAS produção
COPY package*.json ./
RUN npm ci --only=production && \
    npm cache clean --force

# Copia Prisma schema e gera client novamente (importante!)
COPY prisma ./prisma
RUN npx prisma generate

# Copia arquivos buildados
COPY --from=builder /app/dist ./dist

# Expõe a porta
EXPOSE 3002

# Health check melhorado
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3002/health || exit 1

# Comando de inicialização
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
