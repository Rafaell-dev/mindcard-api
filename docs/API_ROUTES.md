# 📋 Documentação de Rotas - MindCard API

## 🌐 Informações Gerais

- **Base URL**: `http://localhost:3000/api/v1`
- **Formato**: JSON
- **Autenticação**: JWT Bearer Token (opcional, atualmente desabilitada)
- **Documentação Interativa**: `http://localhost:3000/api-docs`

---

## 👤 Usuário

### **POST** `/api/v1/usuario/cadastrar`
Cria um novo usuário no sistema.

**Body (JSON):**
```json
{
  "email": "usuario@exemplo.com",
  "nome": "João Silva",
  "senha": "senha123",
  "faculdade": "Universidade Federal do Brasil",
  "idioma": "pt-BR"
}
```

**Resposta (201):**
```json
{
  "id": "019a8588-9582-72f8-ac5e-231e942f52d9",
  "email": "usuario@exemplo.com",
  "nome": "João Silva",
  "faculdade": "Universidade Federal do Brasil",
  "idioma": "pt-BR",
  "dataCriacao": "2025-11-15T00:00:00.000Z"
}
```

**Erros:**
- `400` - Dados inválidos
- `409` - Email já cadastrado

---

### **GET** `/api/v1/usuario/listar/:userId`
Busca um usuário pelo ID.

**Parâmetros:**
- `userId` (string, UUID v7) - ID do usuário

**Exemplo:**
```
GET /api/v1/usuario/listar/019a8588-9582-72f8-ac5e-231e942f52d9
```

**Resposta (200):**
```json
{
  "id": "019a8588-9582-72f8-ac5e-231e942f52d9",
  "email": "usuario@exemplo.com",
  "nome": "João Silva",
  "faculdade": "Universidade Federal do Brasil",
  "idioma": "pt-BR",
  "dataCriacao": "2025-11-15T00:00:00.000Z"
}
```

**Erros:**
- `404` - Usuário não encontrado

---

### **GET** `/api/v1/usuario/listar_por_email/:email`
Busca um usuário pelo email.

**Parâmetros:**
- `email` (string) - Email do usuário

**Exemplo:**
```
GET /api/v1/usuario/listar_por_email/usuario@exemplo.com
```

**Resposta (200):**
```json
{
  "id": "019a8588-9582-72f8-ac5e-231e942f52d9",
  "email": "usuario@exemplo.com",
  "nome": "João Silva"
}
```

**Erros:**
- `404` - Usuário não encontrado

---

### **PATCH** `/api/v1/usuario/atualizar/:userId`
Atualiza os dados de um usuário.

**Parâmetros:**
- `userId` (string, UUID v7) - ID do usuário

**Body (JSON):**
```json
{
  "email": "novoemail@exemplo.com",
  "nome": "João Silva Junior",
  "senha": "novasenha123",
  "faculdade": "Nova Universidade"
}
```

**Resposta (200):**
```json
{
  "id": "019a8588-9582-72f8-ac5e-231e942f52d9",
  "email": "novoemail@exemplo.com",
  "nome": "João Silva Junior",
  "faculdade": "Nova Universidade"
}
```

**Erros:**
- `404` - Usuário não encontrado
- `400` - Dados inválidos

---

## 🧠 Mindcard

### **POST** `/api/v1/mindcard/criar` ⭐ **[ASSÍNCRONO]**
Cria um mindcard e processa com IA em background. Retorna imediatamente com `jobId` para monitoramento.

**Content-Type**: `multipart/form-data`

**Form Data:**
- `titulo` (string, obrigatório) - Título do mindcard
- `usuarioId` (string, UUID v7, obrigatório) - ID do usuário
- `tipoGeracao` (enum, obrigatório) - `FLASHCARDS` ou `QUIZ`
- `promptPersonalizado` (string, opcional) - Prompt customizado para IA
- `fonteArquivo` (file, obrigatório) - Arquivo PDF ou imagem (máx 50MB)

**Exemplo (cURL):**
```bash
curl -X POST http://localhost:3000/api/v1/mindcard/criar \
  -F "titulo=Matemática - Álgebra Linear" \
  -F "usuarioId=8c40a29b-04f4-4960-965d-9e741f66288f" \
  -F "tipoGeracao=FLASHCARDS" \
  -F "promptPersonalizado=Foque em conceitos básicos" \
  -F "fonteArquivo=@documento.pdf"
```

**Resposta (201):** (~500ms)
```json
{
  "success": true,
  "message": "Mindcard criado com sucesso. O processamento será feito em background.",
  "data": {
    "mindcardId": "019a8588-9582-72f8-ac5e-231e942f52d9",
    "jobId": "1",
    "status": "PROCESSING"
  }
}
```

**Formatos Aceitos:**
- PDF (`.pdf`)
- PNG (`.png`)
- JPEG (`.jpg`, `.jpeg`)
- GIF (`.gif`)
- WebP (`.webp`)

**Erros:**
- `400` - Arquivo inválido ou dados incorretos
- `413` - Arquivo muito grande (máx 50MB)

**Próximo passo:** Use o `jobId` retornado para monitorar o status em `/mindcard/status/:jobId`

---

### **GET** `/api/v1/mindcard/listar/:mindcardId`
Busca um mindcard pelo ID.

**Parâmetros:**
- `mindcardId` (string, UUID v7) - ID do mindcard

**Exemplo:**
```
GET /api/v1/mindcard/listar/019a8588-9582-72f8-ac5e-231e942f52d9
```

**Resposta (200):**
```json
{
  "id": "019a8588-9582-72f8-ac5e-231e942f52d9",
  "titulo": "Matemática - Álgebra Linear",
  "fonteArquivo": "https://r2.cloudflare.com/.../arquivo.pdf",
  "promptPersonalizado": "Foque em conceitos básicos",
  "usuarioId": "8c40a29b-04f4-4960-965d-9e741f66288f",
  "dataCriacao": "2025-11-15T00:20:00.000Z",
  "status_processamento": "CONCLUIDO"
}
```

**Erros:**
- `404` - Mindcard não encontrado

---

### **GET** `/api/v1/mindcard/listar_por_usuario/:usuarioId`
Lista todos os mindcards de um usuário.

**Parâmetros:**
- `usuarioId` (string, UUID v7) - ID do usuário

**Exemplo:**
```
GET /api/v1/mindcard/listar_por_usuario/8c40a29b-04f4-4960-965d-9e741f66288f
```

**Resposta (200):**
```json
[
  {
    "id": "019a8588-9582-72f8-ac5e-231e942f52d9",
    "titulo": "Matemática - Álgebra Linear",
    "fonteArquivo": "https://r2.cloudflare.com/.../arquivo.pdf",
    "usuarioId": "8c40a29b-04f4-4960-965d-9e741f66288f",
    "dataCriacao": "2025-11-15T00:20:00.000Z",
    "status_processamento": "CONCLUIDO"
  },
  {
    "id": "019a8589-1234-5678-abcd-ef0123456789",
    "titulo": "História do Brasil",
    "fonteArquivo": "https://r2.cloudflare.com/.../historia.pdf",
    "usuarioId": "8c40a29b-04f4-4960-965d-9e741f66288f",
    "dataCriacao": "2025-11-15T01:00:00.000Z",
    "status_processamento": "PROCESSANDO"
  }
]
```

---

### **PATCH** `/api/v1/mindcard/atualizar/:mindcardId`
Atualiza os dados de um mindcard.

**Content-Type**: `multipart/form-data`

**Parâmetros:**
- `mindcardId` (string, UUID v7) - ID do mindcard

**Form Data:**
- `titulo` (string, opcional) - Novo título
- `promptPersonalizado` (string, opcional) - Novo prompt
- `fonteArquivo` (file, opcional) - Novo arquivo

**Resposta (200):**
```json
{
  "id": "019a8588-9582-72f8-ac5e-231e942f52d9",
  "titulo": "Matemática - Álgebra Linear Avançada",
  "fonteArquivo": "https://r2.cloudflare.com/.../novo_arquivo.pdf",
  "usuarioId": "8c40a29b-04f4-4960-965d-9e741f66288f"
}
```

**Erros:**
- `404` - Mindcard não encontrado

---

### **DELETE** `/api/v1/mindcard/deletar/:mindcardId`
Remove um mindcard e todos os seus cards associados.

**Parâmetros:**
- `mindcardId` (string, UUID v7) - ID do mindcard

**Exemplo:**
```
DELETE /api/v1/mindcard/deletar/019a8588-9582-72f8-ac5e-231e942f52d9
```

**Resposta (200):**
```json
{
  "success": true,
  "message": "Mindcard deletado com sucesso"
}
```

**Erros:**
- `404` - Mindcard não encontrado

---

## 📊 Status e Monitoramento

### **GET** `/api/v1/mindcard/status/:jobId` ⭐
Verifica o status de processamento de um job assíncrono.

**Parâmetros:**
- `jobId` (string) - ID do job retornado ao criar mindcard

**Exemplo:**
```
GET /api/v1/mindcard/status/1
```

**Resposta (200) - Em Processamento:**
```json
{
  "success": true,
  "data": {
    "jobId": "1",
    "mindcardId": "019a8588-9582-72f8-ac5e-231e942f52d9",
    "status": "PROCESSANDO",
    "progress": 45,
    "message": "Gerando cards com IA...",
    "createdAt": "2025-11-15T00:20:00.000Z",
    "updatedAt": "2025-11-15T00:20:45.000Z"
  }
}
```

**Resposta (200) - Concluído:**
```json
{
  "success": true,
  "data": {
    "jobId": "1",
    "mindcardId": "019a8588-9582-72f8-ac5e-231e942f52d9",
    "status": "CONCLUIDO",
    "progress": 100,
    "message": "Processamento concluído com sucesso",
    "cardsGenerated": 10,
    "completedAt": "2025-11-15T00:22:00.000Z"
  }
}
```

**Status Possíveis:**
- `PENDENTE` (0%) - Aguardando processamento
- `PROCESSANDO` (1-99%) - Processando com IA
- `CONCLUIDO` (100%) - Finalizado com sucesso
- `FALHOU` - Erro durante processamento

**Erros:**
- `404` - Job não encontrado

---

### **GET** `/api/v1/mindcard/logs/:mindcardId`
Retorna todos os logs de eventos durante o processamento.

**Parâmetros:**
- `mindcardId` (string, UUID v7) - ID do mindcard

**Exemplo:**
```
GET /api/v1/mindcard/logs/019a8588-9582-72f8-ac5e-231e942f52d9
```

**Resposta (200):**
```json
{
  "success": true,
  "data": [
    {
      "event": "JOB_STARTED",
      "timestamp": "2025-11-15T00:20:00.000Z",
      "metadata": {
        "userId": "8c40a29b-04f4-4960-965d-9e741f66288f",
        "tipoGeracao": "FLASHCARDS",
        "fileSize": 2601162
      }
    },
    {
      "event": "FILE_VALIDATED",
      "timestamp": "2025-11-15T00:20:10.000Z",
      "metadata": {
        "fileName": "matematica.pdf",
        "fileSize": 2601162,
        "mimeType": "application/pdf"
      }
    },
    {
      "event": "GEMINI_REQUEST_SENT",
      "timestamp": "2025-11-15T00:20:15.000Z",
      "metadata": {
        "fileSize": 2601162,
        "mimeType": "application/pdf"
      }
    },
    {
      "event": "GEMINI_RESPONSE_RECEIVED",
      "timestamp": "2025-11-15T00:21:50.000Z",
      "metadata": {
        "cardsGenerated": 10
      }
    },
    {
      "event": "CARDS_SAVED",
      "timestamp": "2025-11-15T00:21:55.000Z",
      "metadata": {
        "totalCards": 10
      }
    },
    {
      "event": "JOB_COMPLETED",
      "timestamp": "2025-11-15T00:22:00.000Z",
      "metadata": {
        "cardsGenerated": 10,
        "duration": 120000
      }
    }
  ]
}
```

**Eventos Possíveis:**
- `JOB_STARTED` - Job iniciado
- `FILE_VALIDATED` - Arquivo validado
- `GEMINI_REQUEST_SENT` - Requisição enviada ao Gemini
- `GEMINI_RESPONSE_RECEIVED` - Resposta recebida do Gemini
- `CARDS_SAVED` - Cards salvos no banco
- `JOB_COMPLETED` - Job finalizado com sucesso
- `JOB_FAILED` - Job falhou (inclui stack trace no metadata)

**Erros:**
- `404` - Mindcard não encontrado

---

## 🎴 Card

### **POST** `/api/v1/card/criar`
Cria um novo card manualmente (flashcard ou questão de quiz).

**Body (JSON):**
```json
{
  "mindcardId": "019a8588-9582-72f8-ac5e-231e942f52d9",
  "tipo": "FLASHCARD",
  "frente": "O que é uma matriz identidade?",
  "verso": "Uma matriz quadrada onde os elementos da diagonal principal são 1 e os demais são 0",
  "dificuldade": "FACIL"
}
```

**Resposta (201):**
```json
{
  "id": "019a8589-abcd-1234-5678-ef0123456789",
  "mindcardId": "019a8588-9582-72f8-ac5e-231e942f52d9",
  "tipo": "FLASHCARD",
  "frente": "O que é uma matriz identidade?",
  "verso": "Uma matriz quadrada onde os elementos da diagonal principal são 1 e os demais são 0",
  "dificuldade": "FACIL",
  "dataCriacao": "2025-11-15T00:30:00.000Z"
}
```

**Tipos de Card:**
- `FLASHCARD` - Pergunta e resposta simples
- `QUESTAO_MULTIPLA_ESCOLHA` - Questão com alternativas

**Níveis de Dificuldade:**
- `FACIL`
- `MEDIO`
- `DIFICIL`

**Erros:**
- `400` - Dados inválidos
- `404` - Mindcard não encontrado

---

### **GET** `/api/v1/card/listar/:cardId`
Busca um card pelo ID.

**Parâmetros:**
- `cardId` (string, UUID v7) - ID do card

**Exemplo:**
```
GET /api/v1/card/listar/019a8589-abcd-1234-5678-ef0123456789
```

**Resposta (200):**
```json
{
  "id": "019a8589-abcd-1234-5678-ef0123456789",
  "mindcardId": "019a8588-9582-72f8-ac5e-231e942f52d9",
  "tipo": "FLASHCARD",
  "frente": "O que é uma matriz identidade?",
  "verso": "Uma matriz quadrada onde os elementos da diagonal principal são 1 e os demais são 0",
  "dificuldade": "FACIL",
  "dataCriacao": "2025-11-15T00:30:00.000Z"
}
```

**Erros:**
- `404` - Card não encontrado

---

### **GET** `/api/v1/card/listar_por_mindcard/:mindcardId`
Lista todos os cards de um mindcard.

**Parâmetros:**
- `mindcardId` (string, UUID v7) - ID do mindcard

**Exemplo:**
```
GET /api/v1/card/listar_por_mindcard/019a8588-9582-72f8-ac5e-231e942f52d9
```

**Resposta (200):**
```json
[
  {
    "id": "019a8589-0001-1234-5678-ef0123456789",
    "mindcardId": "019a8588-9582-72f8-ac5e-231e942f52d9",
    "tipo": "FLASHCARD",
    "frente": "O que é uma matriz identidade?",
    "verso": "Uma matriz quadrada com 1 na diagonal e 0 no resto",
    "dificuldade": "FACIL"
  },
  {
    "id": "019a8589-0002-1234-5678-ef0123456789",
    "mindcardId": "019a8588-9582-72f8-ac5e-231e942f52d9",
    "tipo": "QUESTAO_MULTIPLA_ESCOLHA",
    "frente": "Qual é o determinante de uma matriz identidade 3x3?",
    "opcoes": [
      { "id": "1", "texto": "0", "correta": false },
      { "id": "2", "texto": "1", "correta": true },
      { "id": "3", "texto": "3", "correta": false },
      { "id": "4", "texto": "9", "correta": false }
    ],
    "dificuldade": "MEDIO"
  }
]
```

---

### **PATCH** `/api/v1/card/atualizar/:cardId`
Atualiza os dados de um card.

**Parâmetros:**
- `cardId` (string, UUID v7) - ID do card

**Body (JSON):**
```json
{
  "frente": "O que é uma matriz identidade? (atualizado)",
  "verso": "Resposta atualizada",
  "dificuldade": "MEDIO"
}
```

**Resposta (200):**
```json
{
  "id": "019a8589-abcd-1234-5678-ef0123456789",
  "frente": "O que é uma matriz identidade? (atualizado)",
  "verso": "Resposta atualizada",
  "dificuldade": "MEDIO"
}
```

**Erros:**
- `404` - Card não encontrado
- `400` - Dados inválidos

---

### **DELETE** `/api/v1/card/deletar/:cardId`
Remove um card.

**Parâmetros:**
- `cardId` (string, UUID v7) - ID do card

**Exemplo:**
```
DELETE /api/v1/card/deletar/019a8589-abcd-1234-5678-ef0123456789
```

**Resposta (200):**
```json
{
  "success": true,
  "message": "Card deletado com sucesso"
}
```

**Erros:**
- `404` - Card não encontrado

---

## 🔄 Fluxo Completo de Uso

### **Cenário: Criar Mindcard com IA**

#### **1. Criar Mindcard (Assíncrono)**
```bash
POST /api/v1/mindcard/criar
# Resposta: { jobId: "1", mindcardId: "019a8588-..." }
```

#### **2. Monitorar Status**
```bash
GET /api/v1/mindcard/status/1
# Resposta: { status: "PROCESSANDO", progress: 45 }
```

#### **3. Aguardar Conclusão**
```bash
GET /api/v1/mindcard/status/1
# Resposta: { status: "CONCLUIDO", progress: 100, cardsGenerated: 10 }
```

#### **4. Buscar Mindcard Completo**
```bash
GET /api/v1/mindcard/listar/019a8588-9582-72f8-ac5e-231e942f52d9
```

#### **5. Listar Cards Gerados**
```bash
GET /api/v1/card/listar_por_mindcard/019a8588-9582-72f8-ac5e-231e942f52d9
```

#### **6. (Opcional) Ver Logs Detalhados**
```bash
GET /api/v1/mindcard/logs/019a8588-9582-72f8-ac5e-231e942f52d9
```

---

## 📦 Exemplos com cURL

### Criar Usuário
```bash
curl -X POST http://localhost:3000/api/v1/usuario/cadastrar \
  -H "Content-Type: application/json" \
  -d '{
    "email": "teste@exemplo.com",
    "nome": "João Silva",
    "senha": "senha123"
  }'
```

### Criar Mindcard com IA
```bash
curl -X POST http://localhost:3000/api/v1/mindcard/criar \
  -F "titulo=Matemática" \
  -F "usuarioId=8c40a29b-04f4-4960-965d-9e741f66288f" \
  -F "tipoGeracao=FLASHCARDS" \
  -F "fonteArquivo=@documento.pdf"
```

### Verificar Status
```bash
curl http://localhost:3000/api/v1/mindcard/status/1
```

### Buscar Mindcard
```bash
curl http://localhost:3000/api/v1/mindcard/listar/019a8588-9582-72f8-ac5e-231e942f52d9
```

### Listar Cards
```bash
curl http://localhost:3000/api/v1/card/listar_por_mindcard/019a8588-9582-72f8-ac5e-231e942f52d9
```

---

## 🎯 Códigos de Status HTTP

| Código | Significado | Quando ocorre |
|--------|-------------|---------------|
| `200` | OK | Requisição bem-sucedida (GET, PATCH, DELETE) |
| `201` | Created | Recurso criado com sucesso (POST) |
| `400` | Bad Request | Dados inválidos ou faltando |
| `404` | Not Found | Recurso não encontrado |
| `409` | Conflict | Conflito (ex: email já existe) |
| `413` | Payload Too Large | Arquivo muito grande (máx 50MB) |
| `500` | Internal Server Error | Erro interno do servidor |

---

## 🔐 Autenticação (Futuro)

A API possui suporte para autenticação JWT, atualmente desabilitada.

**Quando habilitada:**
```bash
# Obter token
POST /api/v1/auth/login
{ "email": "user@example.com", "senha": "senha123" }

# Usar token em requisições
Authorization: Bearer <token>
```

---

## 🌐 URLs Importantes

| Recurso | URL | Descrição |
|---------|-----|-----------|
| **API Base** | `http://localhost:3000/api/v1` | Base de todas as rotas |
| **Swagger UI** | `http://localhost:3000/api-docs` | Documentação interativa |
| **Bull Board** | `http://localhost:3000/admin/queues` | Monitoramento de filas |
| **Especificação OpenAPI** | `http://localhost:3000/api-docs-json` | JSON da especificação |

---

## 📚 Documentação Adicional

- **Swagger UI**: `http://localhost:3000/api-docs` - Documentação interativa
- **Async Queue Guide**: `docs/ASYNC_QUEUE_GUIDE.md` - Guia de filas assíncronas
- **Quick Start**: `docs/QUICK_START_ASYNC_QUEUE.md` - Início rápido
- **Postman Collection**: `postmanCollections/MindCard_API_Async_Queue.postman_collection.json`

---

## 🎓 Glossário

- **Mindcard**: Conjunto de flashcards ou questões de quiz
- **Card**: Um flashcard individual ou questão de quiz
- **Job**: Tarefa assíncrona de processamento com IA
- **UUID v7**: Identificador único universal versão 7 (temporal)
- **Gemini AI**: IA do Google usada para gerar conteúdo
- **R2**: Serviço de armazenamento da Cloudflare
- **Bull Board**: Interface web para monitorar filas BullMQ

---

**📌 Nota**: Para exemplos interativos e testes, acesse a documentação Swagger em `http://localhost:3000/api-docs`
