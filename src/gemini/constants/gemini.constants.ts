/**
 * Dependency injection token for Gemini options
 */
export const GEMINI_OPTIONS = 'GEMINI_OPTIONS';

/**
 * Supported file MIME types
 */
export const SUPPORTED_MIME_TYPES = [
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
] as const;

/**
 * Maximum file size for inline upload (20MB)
 * Files larger than this will use the File API
 */
export const MAX_INLINE_FILE_SIZE = 20 * 1024 * 1024;

/**
 * Maximum file size for File API upload (2GB)
 */
export const MAX_FILE_API_SIZE = 2 * 1024 * 1024 * 1024;

/**
 * Default model configuration
 */
export const DEFAULT_MODEL = 'gemini-1.5-flash';
export const DEFAULT_TEMPERATURE = 0.7;
export const DEFAULT_MAX_TOKENS = 2048;
export const DEFAULT_TOP_P = 0.95;
export const DEFAULT_TOP_K = 40;

/**
 * Rate limiting defaults
 */
export const DEFAULT_REQUESTS_PER_MINUTE = 60;
export const DEFAULT_MAX_RETRIES = 3;
export const DEFAULT_RETRY_DELAY = 1000;

/**
 * Cache defaults
 */
export const DEFAULT_CACHE_TTL = 3600; // 1 hour

/**
 * Prompt templates
 */
export const FLASHCARD_GENERATION_PROMPT = `
Analise o conteúdo fornecido e gere NO MÁXIMO 15 flashcards educacionais de alta qualidade.

INSTRUÇÕES:
- Gere APENAS os 15 conceitos mais importantes do conteúdo
- Cada flashcard deve ter uma frente (pergunta/conceito) e um verso (resposta/explicação)
- Classifique a dificuldade como FACIL, MEDIO ou DIFICIL
- Adicione tags relevantes para categorização
- Mantenha as perguntas claras e concisas
- As respostas devem ser completas mas diretas ao ponto (máximo 2-3 linhas)

IMPORTANTE: Retorne APENAS um JSON válido, sem texto adicional antes ou depois.

Formato JSON:
{
  "flashcards": [
    {
      "frente": "string",
      "verso": "string",
      "dificuldade": "FACIL|MEDIO|DIFICIL",
      "tags": ["tag1", "tag2"]
    }
  ]
}
`;

export const QUESTION_GENERATION_PROMPT = `
Analise o conteúdo fornecido e gere NO MÁXIMO 10 questões de múltipla escolha educacionais.

INSTRUÇÕES:
- Gere APENAS as 10 questões mais relevantes do conteúdo
- Cada questão deve ter exatamente 4 alternativas (A, B, C, D)
- Apenas uma alternativa deve ser correta
- Inclua uma explicação concisa da resposta correta (máximo 2 linhas)
- As questões devem testar compreensão, não apenas memorização
- Adicione tags relevantes para categorização
- Mantenha as alternativas curtas e objetivas

IMPORTANTE: Retorne APENAS um JSON válido, sem texto adicional antes ou depois.

Formato JSON:
{
  "questions": [
    {
      "pergunta": "string",
      "opcoes": [
        { "id": "A", "texto": "string" },
        { "id": "B", "texto": "string" },
        { "id": "C", "texto": "string" },
        { "id": "D", "texto": "string" }
      ],
      "respostaCorreta": "A|B|C|D",
      "explicacao": "string",
      "tags": ["tag1", "tag2"]
    }
  ]
}
`;
