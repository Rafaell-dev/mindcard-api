# 🧠 MindCard API

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-11.0.1-E0234E?style=for-the-badge&logo=nestjs" alt="NestJS" />
  <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-6.19.0-2D3748?style=for-the-badge&logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql" alt="PostgreSQL" />
</p>

<p align="center">
  <strong>API REST para geração inteligente de flashcards e quizzes educacionais com IA</strong>
</p>

---

## 📋 Sobre o Projeto

**MindCard** é uma plataforma educacional que utiliza **Google Gemini AI** para gerar automaticamente flashcards e questões de múltipla escolha a partir de documentos PDF e imagens. A API processa arquivos enviados pelos usuários e cria conteúdo educacional personalizado, facilitando o estudo e memorização de conteúdos.

### 🎯 Principais Funcionalidades

- 🤖 **Geração de Flashcards com IA** - Cria perguntas e respostas a partir de PDFs/imagens
- 📝 **Geração de Quizzes** - Gera questões de múltipla escolha com 4 alternativas
- ☁️ **Upload de Arquivos** - Suporte a PDFs e imagens até **2GB** (Cloudflare R2)
- 🔄 **File API Automática** - Arquivos >20MB usam Gemini File API automaticamente
- 🎨 **Sistema de Dificuldade** - Classifica cards como FÁCIL, MÉDIO ou DIFÍCIL
- 🏷️ **Tags e Categorização** - Organização automática por assunto
- 🔒 **Clean Architecture** - Código organizado em camadas (entities, use cases, repositories)
- ✅ **Validação Robusta** - Validação de variáveis de ambiente no startup

---

## 🏗️ Arquitetura

### Stack Tecnológica

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **NestJS** | 11.0.1 | Framework backend |
| **TypeScript** | 5.0+ | Linguagem principal |
| **Prisma ORM** | 6.19.0 | ORM para PostgreSQL |
| **PostgreSQL** | 16+ | Banco de dados |
| **Google Gemini AI** | 1.5-flash-latest | IA para geração de conteúdo |
| **Cloudflare R2** | - | Armazenamento de arquivos |
| **Axios** | - | Cliente HTTP para File API |
| **Class Validator** | - | Validação de DTOs |

### Padrões e Princípios

- ✅ **Clean Architecture** - Separação de camadas (domain, use cases, infra)
- ✅ **Domain-Driven Design (DDD)** - Entidades ricas em domínio
- ✅ **Dependency Injection** - IoC container do NestJS
- ✅ **Repository Pattern** - Abstração de persistência
- ✅ **Factory Pattern** - Criação de entidades em testes
- ✅ **Use Cases** - Orquestração de lógica de negócio
- ✅ **DTOs** - Validação e tipagem de entrada/saída
- ✅ **Naming Conventions** - `camelCase` no código, `snake_case` para persistencia

---

## 🚀 Início Rápido

### Pré-requisitos

- **Node.js** 20+ 
- **PostgreSQL** 16+
- **npm** ou **yarn**
- **Conta Google Cloud** (para Gemini API Key)
- **Conta Cloudflare** (para R2 Storage)

### 1. Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/mindcard-api.git
cd mindcard-api

# Instale as dependências
npm install
```

### 2. Configuração do Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/mindcard?schema=public"
DATABASE_PASSWORD=sua_senha_forte

# Server
HOST=localhost
PORT=3002

# Cloudflare R2
R2_ENDPOINT="https://account-id.r2.cloudflarestorage.com"
R2_ACCESS_KEY_ID=sua_r2_access_key
R2_SECRET_ACCESS_KEY=sua_r2_secret_key
R2_BUCKET_NAME=seu-bucket-name

# Google Gemini AI
GEMINI_API_KEY=sua_gemini_api_key
GEMINI_MODEL=gemini-1.5-flash-latest
GEMINI_MAX_TOKENS=8192
```

**📝 Como obter as credenciais:**

- **Gemini API Key**: https://makersuite.google.com/app/apikey
- **Cloudflare R2**: https://dash.cloudflare.com → R2 → Criar bucket

### 3. Configuração do Banco de Dados

```bash
# Gere o Prisma Client
npx prisma generate

# Execute as migrations
npx prisma migrate dev

# (Opcional) Visualize o banco no Prisma Studio
npx prisma studio
```

### 4. Executar o Projeto

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
```

A API estará disponível em: **http://localhost:3002/api/v1**

---

## 📚 Documentação da API

### Endpoints Principais

#### 🧠 Mindcards

##### **POST** `/api/v1/mindcard/criar`
Cria um Mindcard com geração automática de flashcards ou quiz.

**Body (multipart/form-data):**
```typescript
{
  titulo: string;              // Título do mindcard
  usuarioId: string;           // ID do usuário
  tipoGeracao: 'FLASHCARDS' | 'QUIZ';  // Tipo de conteúdo
  promptPersonalizado?: string; // Prompt customizado (opcional)
  fonteArquivo: File;          // PDF ou imagem (max 2GB)
}
```

**Response:**
```json
{
  "mindcard": {
    "id": "01JCQR...",
    "titulo": "Biologia - Capítulo 3",
    "fonteArquivo": "https://r2-url.com/...",
    "usuarioId": "user-123",
    "dataCriacao": "2025-11-12T00:00:00.000Z"
  },
  "totalCardsGenerated": 15
}
```

**Limites:**
- ✅ Arquivos ≤ 20MB: Upload inline (10-15s)
- ✅ Arquivos > 20MB: File API automática (30-180s)
- ✅ Máximo: **2GB**
- ✅ Flashcards: até **15 cards** por geração
- ✅ Quiz: até **10 questões** por geração

##### **GET** `/api/v1/mindcard/listar_por_usuario/:usuarioId`
Lista todos os mindcards de um usuário.

#### 📇 Cards

##### **GET** `/api/v1/card/listar_por_mindcard/:mindcardId`
Lista todos os cards gerados para um mindcard.

**Response:**
```json
[
  {
    "id": "card-123",
    "titulo": "O que é fotossíntese?",
    "tipo": "ABERTA",
    "dificuldade": "MEDIO",
    "pergunta": "O que é fotossíntese?",
    "respostaCorreta": "Processo de conversão de luz em energia",
    "mindcardId": "mindcard-xyz"
  },
  {
    "id": "card-456",
    "tipo": "MULTIPLA_ESCOLHA",
    "pergunta": "Qual é a capital do Brasil?",
    "respostaCorreta": "C",
    "alternativaTexto": "A. São Paulo\nB. Rio\nC. Brasília\nD. Salvador"
  }
]
```

---

## 🧪 Testes

### Testes Automatizados

```bash
# Testes unitários
npm run test

# Testes E2E
npm run test:e2e

# Coverage
npm run test:cov
```

### 📮 Testes com Postman

A API inclui uma **collection completa do Postman** pronta para uso!

**Arquivos incluídos:**
- `MindCard_API.postman_collection.json` - Collection com todas as rotas
- `MindCard_API.postman_environment.json` - Ambiente local
- `MindCard_API.postman_environment_production.json` - Ambiente de produção

**Como usar:**
1. Importe a collection no Postman
2. Selecione o ambiente "MindCard API - Local"
3. Execute as requests na ordem: Usuário → Mindcard → Cards

**Recursos:**
- ✅ Todas as rotas documentadas
- ✅ Exemplos de request/response
- ✅ Variáveis de ambiente automáticas
- ✅ Scripts de teste integrados
- ✅ Suporte a upload de arquivos

📖 **Guia completo:** [POSTMAN_GUIDE.md](POSTMAN_GUIDE.md)

---

## 🔧 Configurações Avançadas

### Variáveis de Ambiente Completas

```env
# Application
NODE_ENV=homolog                 # homolog | production
HOST=localhost
PORT=3002
LOG_LEVEL=info                   # debug | info | warn | error

# Database
DATABASE_URL=postgresql://...
DATABASE_USER=postgres
DATABASE_PASSWORD=senha

# Cloudflare R2
R2_ENDPOINT=https://...
R2_ACCESS_KEY_ID=key
R2_SECRET_ACCESS_KEY=secret
R2_BUCKET_NAME=bucket

# Gemini AI - Modelos disponíveis
GEMINI_MODEL=gemini-1.5-flash-latest   # Rápido (recomendado)
# GEMINI_MODEL=gemini-1.5-pro-latest   # Mais preciso, mais lento

# Gemini AI - Parâmetros de Geração
GEMINI_API_KEY=key
GEMINI_TEMPERATURE=0.7          # 0.0 (determinístico) a 1.0 (criativo)
GEMINI_MAX_TOKENS=8192          # Máximo: 8192
GEMINI_TOP_P=0.95               # Nucleus sampling
GEMINI_TOP_K=40                 # Top-K sampling

# Gemini AI - Performance
GEMINI_ENABLE_CACHE=true        # Cache de respostas
GEMINI_CACHE_TTL=3600           # Tempo de cache (segundos)
GEMINI_ENABLE_RATE_LIMIT=true  # Limitar requisições
GEMINI_REQUESTS_PER_MINUTE=60  # Limite de req/min

# Gemini AI - Resiliência
GEMINI_MAX_RETRIES=3            # Tentativas em caso de erro
GEMINI_RETRY_DELAY=1000         # Delay entre retries (ms)
```

### Ajuste de Performance

**Para arquivos grandes:**
```env
GEMINI_MAX_TOKENS=8192          # Usar máximo
```

**Para respostas mais criativas:**
```env
GEMINI_TEMPERATURE=0.9          # Aumentar temperatura
GEMINI_TOP_P=0.98
```

**Para ambientes com muitas requisições:**
```env
GEMINI_ENABLE_CACHE=true
GEMINI_REQUESTS_PER_MINUTE=100  # Ajustar conforme seu plano
```

---

## 📂 Estrutura do Projeto

```
mindcard-api/
├── src/
│   ├── config/                  # Configurações (env, database, gemini, r2)
│   │   ├── env.config.ts        # ✅ Validação de variáveis de ambiente
│   │   ├── gemini.config.ts     # Configuração do Gemini AI
│   │   ├── r2.config.ts         # Configuração do R2 Storage
│   │   └── database.config.ts
│   │
│   ├── database/                # Camada de infraestrutura
│   │   ├── prisma/
│   │   │   ├── prisma.service.ts
│   │   │   ├── mappers/         # Prisma ↔ Domain mappers
│   │   │   └── repositories/    # Implementações Prisma
│   │   └── database.module.ts
│   │
│   ├── modules/                 # Módulos de domínio
│   │   ├── user/
│   │   │   ├── entities/        # Entidades de domínio
│   │   │   ├── repositories/    # Interfaces de repositório
│   │   │   ├── useCases/        # Casos de uso
│   │   │   └── factories/       # Factories para testes
│   │   │
│   │   ├── mindcard/
│   │   │   └── useCases/
│   │   │       └── createMindcardWithAiUseCase/  # 🤖 IA integrada
│   │   │
│   │   └── card/
│   │       ├── entities/
│   │       │   ├── Card.ts
│   │       │   └── OpcaoResposta.ts  # Opções de quiz
│   │       └── repositories/
│   │
│   ├── controllers/             # Camada de apresentação
│   │   └── modules/
│   │       ├── mindcard/
│   │       │   ├── mindcard.controller.ts
│   │       │   ├── mindcard.module.ts
│   │       │   └── dtos/        # DTOs com validação
│   │       └── card/
│   │
│   ├── gemini/                  # 🤖 Módulo Gemini AI
│   │   ├── gemini.module.ts     # Módulo dinâmico
│   │   ├── gemini.service.ts    # Service principal
│   │   ├── interfaces/          # Tipos e interfaces
│   │   ├── constants/           # Prompts e configurações
│   │   ├── utils/
│   │   │   ├── file-validator.ts     # Validação de arquivos
│   │   │   ├── file-uploader.ts      # 📤 Upload para File API
│   │   │   ├── rate-limiter.ts       # Rate limiting
│   │   │   └── retry-handler.ts      # Retry logic
│   │   └── cache/
│   │       └── response-cache.ts     # Cache de respostas
│   │
│   ├── r2/                      # ☁️ Módulo R2 Storage
│   │   ├── r2.module.ts
│   │   └── r2.service.ts
│   │
│   ├── exceptions/              # Exceções customizadas
│   │   ├── appException.ts
│   │   ├── GeminiApiException.ts
│   │   └── ...
│   │
│   ├── utils/                   # Utilitários
│   └── main.ts                  # Bootstrap da aplicação
│
├── prisma/
│   ├── schema.prisma            # Schema do banco
│   └── migrations/              # Migrações
│
├── docs/                        # 📚 Documentação
│   ├── MINDCARD_AI_FLOW.md      # Fluxo de IA integrado
│   ├── GEMINI_INTEGRATION.md    # Integração Gemini
│   └── GEMINI_TESTING.md        # Guia de testes
│
├── .env.example                 # Template de variáveis
├── package.json
└── tsconfig.json
```

---

## 🎨 Fluxo de Geração com IA

### Sequência Completa

```mermaid
sequenceDiagram
    participant User
    participant API
    participant R2
    participant Gemini
    participant Database

    User->>API: POST /mindcard/criar (arquivo + dados)
    API->>API: Valida arquivo e dados
    API->>R2: Upload do arquivo
    R2-->>API: URL do arquivo
    API->>Database: Cria Mindcard
    
    alt Arquivo ≤ 20MB
        API->>Gemini: generateFlashcards (inline)
    else Arquivo > 20MB
        API->>Gemini: Upload via File API
        Gemini-->>API: File URI
        API->>Gemini: Aguarda processamento
        API->>Gemini: generateFlashcards (file URI)
    end
    
    Gemini-->>API: JSON com cards gerados
    API->>API: Parse e validação
    
    loop Para cada card
        API->>Database: Salva Card
        alt Tipo QUIZ
            loop Para cada opção
                API->>Database: Salva OpcaoResposta
            end
        end
    end
    
    API-->>User: { mindcard, totalCardsGenerated }
```

### Limites e Otimizações

| Métrica | Valor | Observação |
|---------|-------|------------|
| **Max File Size** | 2GB | Limite da File API |
| **Inline Threshold** | 20MB | Acima usa File API |
| **Max Output Tokens** | 8.192 | Limite do Gemini |
| **Flashcards/Geração** | 15 | Para caber no limite de tokens |
| **Questões/Geração** | 10 | Com 4 alternativas cada |
| **Tempo Médio (≤20MB)** | 10-15s | Upload inline |
| **Tempo Médio (>20MB)** | 30-180s | File API + processamento |

---

## 🔐 Segurança

### Implementado

- ✅ **Validação de Variáveis**: Startup falha se variáveis obrigatórias estão faltando
- ✅ **Validação de Entrada**: DTOs com `class-validator`
- ✅ **Validação de Arquivos**: Tipo MIME, tamanho, extensão
- ✅ **Rate Limiting**: Proteção contra abuso da API Gemini
- ✅ **CORS**: Configurado para frontend específico
- ✅ **Type Safety**: TypeScript estrito
- ✅ **SQL Injection**: Prisma ORM previne automaticamente

### Recomendações para Produção

- 🔒 **Autenticação**: Implementar JWT/OAuth
- 🔒 **Autorização**: Verificar ownership de recursos
- 🔒 **HTTPS**: Usar certificado SSL
- 🔒 **Helmet**: Adicionar headers de segurança
- 🔒 **Rate Limiting Global**: Throttler do NestJS
- 🔒 **Secrets Management**: Usar AWS Secrets Manager ou similar
- 🔒 **Audit Logs**: Registrar ações sensíveis

---

## 🚢 Deploy

### Docker (Recomendado)

```bash
# Build da imagem
docker build -t mindcard-api .

# Executar
docker run -p 3002:3002 --env-file .env mindcard-api
```

### Variáveis de Ambiente para Produção

```env
NODE_ENV=production
HOST=0.0.0.0
PORT=3002
DATABASE_URL=postgresql://...  # Use connection pooling (Supabase, Neon, etc)
```

### Plataformas Recomendadas

- **Railway**: Deploy automático via Git
- **Render**: Free tier disponível
- **AWS ECS**: Escalável com Fargate
- **Google Cloud Run**: Serverless
- **Heroku**: Fácil deploy

---

## 📊 Monitoramento

### Logs

```typescript
// A aplicação usa Logger do NestJS
[GeminiService] Generating flashcards from file
[GeminiService] File size: 5242880 bytes - Using inline upload
[GeminiService] Generated 15 flashcards in 12340ms
[GeminiService] File uploaded successfully. URI: files/abc123
```

### Métricas Importantes

- ⏱️ **Tempo de resposta** da geração de IA
- 📊 **Taxa de sucesso** das gerações
- 🔢 **Tokens consumidos** por requisição
- 💾 **Tamanho médio** dos arquivos
- 🚫 **Taxa de erro** (safety filters, token limits)

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Código

- ✅ **ESLint** configurado
- ✅ **Prettier** para formatação
- ✅ **Conventional Commits**
- ✅ **Clean Architecture**
- ✅ **Testes obrigatórios** para use cases

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores

- **Sua Equipe** - *Desenvolvimento inicial*

---

## 📞 Suporte

- 📧 Email: araujor.contato@gmail.com
- 📝 Issues: [GitHub Issues](https://github.com/rafaell-dev/mindcard-api/issues)

---

<p align="center">
  Feito com ❤️ e ☕ por rafaell-dev
</p>
