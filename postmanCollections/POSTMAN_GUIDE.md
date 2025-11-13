# 📮 MindCard API - Postman Collection

Collection completa da API MindCard para testes e integração.

## 📦 Arquivos Incluídos

- **MindCard_API.postman_collection.json** - Collection principal com todas as rotas
- **MindCard_API.postman_environment.json** - Ambiente de desenvolvimento (localhost)
- **MindCard_API.postman_environment_production.json** - Ambiente de produção

## 🚀 Como Importar

### 1. Importar a Collection

1. Abra o Postman
2. Clique em **Import** (canto superior esquerdo)
3. Selecione o arquivo `MindCard_API.postman_collection.json`
4. Clique em **Import**

### 2. Importar os Ambientes

1. Clique em **Environments** (barra lateral esquerda)
2. Clique em **Import**
3. Selecione os arquivos:
   - `MindCard_API.postman_environment.json` (Local)
   - `MindCard_API.postman_environment_production.json` (Produção)
4. Clique em **Import**

### 3. Selecionar o Ambiente

1. No canto superior direito, clique no dropdown de ambientes
2. Selecione **MindCard API - Local** para desenvolvimento

## 📚 Estrutura da Collection

A collection está organizada em 3 pastas principais:

### 👤 Usuários
- **POST** `/usuario/cadastrar` - Criar novo usuário
- **GET** `/usuario/listar/:userId` - Buscar usuário por ID
- **GET** `/usuario/listar_por_email/:email` - Buscar usuário por email
- **PATCH** `/usuario/atualizar/:userId` - Atualizar usuário

### 🧠 Mindcards
- **POST** `/mindcard/criar` - Criar mindcard com IA (multipart/form-data)
- **GET** `/mindcard/listar/:mindcardId` - Buscar mindcard por ID
- **GET** `/mindcard/listar_por_usuario/:usuarioId` - Listar mindcards do usuário
- **PATCH** `/mindcard/atualizar/:mindcardId` - Atualizar mindcard
- **DELETE** `/mindcard/deletar/:mindcardId` - Deletar mindcard

### 📇 Cards
- **POST** `/card/criar` - Criar card manual
- **GET** `/card/listar/:cardId` - Buscar card por ID
- **GET** `/card/listar_por_mindcard/:mindcardId` - Listar cards do mindcard
- **PATCH** `/card/atualizar/:cardId` - Atualizar card
- **DELETE** `/card/deletar/:cardId` - Deletar card

## 🔧 Variáveis de Ambiente

### Variáveis Disponíveis

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `baseUrl` | URL base da API | `http://localhost:3002` |
| `usuarioId` | ID do usuário atual | Auto-preenchido após cadastro |
| `mindcardId` | ID do mindcard atual | Auto-preenchido após criação |
| `cardId` | ID do card atual | Auto-preenchido após criação |

### Como Usar

As variáveis são usadas com a sintaxe `{{nomeVariavel}}`:

```
{{baseUrl}}/usuario/listar/{{usuarioId}}
```

### Auto-preenchimento

Algumas rotas têm **scripts de teste** que salvam automaticamente os IDs nas variáveis:

- ✅ Criar Usuário → salva `usuarioId`
- ✅ Criar Mindcard → salva `mindcardId`
- ✅ Criar Card → salva `cardId`

## 🎯 Fluxo de Uso Recomendado

### 1️⃣ Criar Usuário

```http
POST {{baseUrl}}/usuario/cadastrar
Content-Type: application/json

{
  "email": "usuario@example.com",
  "nome": "Nome do Usuário",
  "senha": "senha123",
  "faculdade": "Universidade XYZ",
  "idioma": "pt-BR"
}
```

✅ O `usuarioId` será salvo automaticamente

### 2️⃣ Criar Mindcard com IA

```http
POST {{baseUrl}}/mindcard/criar
Content-Type: multipart/form-data

titulo: Biologia - Capítulo 1
usuarioId: {{usuarioId}}
tipoGeracao: FLASHCARDS
fonteArquivo: [arquivo.pdf]
```

✅ O `mindcardId` será salvo automaticamente
✅ Cards serão gerados automaticamente pela IA

### 3️⃣ Listar Cards Gerados

```http
GET {{baseUrl}}/card/listar_por_mindcard/{{mindcardId}}
```

### 4️⃣ (Opcional) Criar Card Manual

```http
POST {{baseUrl}}/card/criar
Content-Type: application/json

{
  "titulo": "Pergunta personalizada",
  "tipo": "ABERTA",
  "dificuldade": "MEDIO",
  "pergunta": "Qual é a pergunta?",
  "respostaCorreta": "Esta é a resposta",
  "mindcardId": "{{mindcardId}}"
}
```

## 📝 Tipos de Card

### ABERTA (Flashcard)
Pergunta com resposta dissertativa:

```json
{
  "tipo": "ABERTA",
  "pergunta": "O que é fotossíntese?",
  "respostaCorreta": "Processo de conversão de luz em energia"
}
```

### MULTIPLA_ESCOLHA (Quiz)
Questão com 4 alternativas:

```json
{
  "tipo": "MULTIPLA_ESCOLHA",
  "pergunta": "Qual é a capital do Brasil?",
  "respostaCorreta": "C",
  "alternativaTexto": "A. São Paulo\nB. Rio de Janeiro\nC. Brasília\nD. Salvador"
}
```

### ALTERNATIVA (Verdadeiro/Falso)
```json
{
  "tipo": "ALTERNATIVA",
  "pergunta": "A Terra é plana?",
  "respostaCorreta": "Falso"
}
```

## 🎨 Dificuldades

- `FACIL` - Conceitos básicos
- `MEDIO` - Conhecimento intermediário
- `DIFICIL` - Conceitos avançados

## 🤖 Geração de IA

### Tipos de Geração

- **FLASHCARDS** - Gera até 15 flashcards (perguntas abertas)
- **QUIZ** - Gera até 10 questões de múltipla escolha

### Limites de Arquivo

| Tamanho | Método | Tempo Estimado |
|---------|--------|----------------|
| ≤ 20MB | Upload inline | 10-15 segundos |
| > 20MB | Gemini File API | 30-180 segundos |
| Máximo | 2GB | - |

### Prompt Personalizado

Você pode customizar a geração adicionando instruções:

```
promptPersonalizado: "Foque em conceitos básicos e exemplos práticos"
```

## 📤 Upload de Arquivos

Para testar upload de arquivos no Postman:

1. Selecione a aba **Body**
2. Escolha **form-data**
3. Para o campo `fonteArquivo`:
   - Mude o tipo de "Text" para "File"
   - Clique em "Select Files"
   - Escolha o PDF ou imagem

## ✅ Testes Automáticos

A collection inclui testes automáticos que:

- ✅ Verificam status code de sucesso
- ✅ Salvam IDs automaticamente nas variáveis
- ✅ Validam estrutura de resposta

### Ver Resultados dos Testes

Após executar uma request:
1. Clique na aba **Test Results**
2. Veja os testes que passaram/falharam

## 🔍 Exemplos de Resposta

### Criar Mindcard (Sucesso)

```json
{
  "mindcard": {
    "id": "01JCQR7X9Y0Z1A2B3C4D5E6F7G",
    "titulo": "Biologia - Fotossíntese",
    "fonteArquivo": "https://pub-123.r2.dev/mindcards/user_mindcard.pdf",
    "promptPersonalizado": null,
    "usuarioId": "01JCQR5H8K9M0N1P2Q3R4S5T6U",
    "dataCriacao": "2025-11-13T14:20:00.000Z"
  },
  "totalCardsGenerated": 15
}
```

### Listar Cards (Sucesso)

```json
[
  {
    "id": "01JCQR9A8B7C6D5E4F3G2H1I0J",
    "titulo": "Fotossíntese - Definição",
    "tipo": "ABERTA",
    "dificuldade": "FACIL",
    "pergunta": "O que é fotossíntese?",
    "respostaCorreta": "Processo de conversão de luz solar em energia química",
    "alternativaTexto": null,
    "mindcardId": "01JCQR7X9Y0Z1A2B3C4D5E6F7G"
  },
  {
    "id": "01JCQR9K9L8M7N6O5P4Q3R2S1T",
    "titulo": "Clorofila",
    "tipo": "MULTIPLA_ESCOLHA",
    "dificuldade": "MEDIO",
    "pergunta": "Qual pigmento é responsável pela cor verde das plantas?",
    "respostaCorreta": "A",
    "alternativaTexto": "A. Clorofila\nB. Caroteno\nC. Xantofila\nD. Antocianina",
    "mindcardId": "01JCQR7X9Y0Z1A2B3C4D5E6F7G"
  }
]
```

## 🐛 Troubleshooting

### Erro: "Cannot read property 'id' of undefined"

**Causa:** Variável de ambiente não está definida

**Solução:**
1. Execute primeiro a request que cria o recurso
2. Ou defina manualmente a variável no ambiente

### Erro: "ECONNREFUSED"

**Causa:** API não está rodando

**Solução:**
```bash
cd D:/mindcard/mindcard-api
npm run start:dev
```

### Arquivo muito grande

**Limite:** 2GB máximo

**Dica:** Arquivos > 20MB usam File API automática (mais lento)

## 📞 Suporte

- 📧 Email: suporte@mindcard.com
- 📝 Issues: [GitHub Issues](https://github.com/seu-usuario/mindcard-api/issues)
- 📚 Docs: Ver README.md principal do projeto

## 🔗 Links Úteis

- [Postman Documentation](https://learning.postman.com/docs/getting-started/introduction/)
- [Postman Collection Format](https://schema.postman.com/)
- [API MindCard - README](../README.md)

---

<p align="center">
  Feito com ❤️ e ☕ pela equipe MindCard
</p>
