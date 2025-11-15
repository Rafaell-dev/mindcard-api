export const QUEUE_NAMES = {
  MINDCARD_GENERATION: 'mindcard-generation',
  MINDCARD_LOGS: 'mindcard-logs',
  MINDCARD_NOTIFICATIONS: 'mindcard-notifications',
} as const;

export const QUEUE_PRIORITIES = {
  HIGH: 1, // Arquivos pequenos (<5MB)
  NORMAL: 5, // Arquivos médios (5-50MB)
  LOW: 10, // Arquivos grandes (>50MB)
} as const;

export const FILE_SIZE_THRESHOLDS = {
  SMALL: 5 * 1024 * 1024, // 5MB
  MEDIUM: 50 * 1024 * 1024, // 50MB
} as const;

export const RETRY_DELAYS = [30000, 60000, 120000] as const; // 30s, 60s, 120s
