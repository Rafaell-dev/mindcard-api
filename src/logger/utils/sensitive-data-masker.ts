export function maskSensitiveData(data: unknown): unknown {
  if (!data || typeof data !== 'object') {
    return data;
  }

  const sensitiveFields = [
    'senha',
    'password',
    'token',
    'apiKey',
    'api_key',
    'secret',
    'authorization',
    'auth',
    'accessToken',
    'access_token',
    'refreshToken',
    'refresh_token',
  ];

  const mask = (obj: unknown): unknown => {
    if (Array.isArray(obj)) {
      return obj.map((item) => mask(item));
    }

    if (obj && typeof obj === 'object') {
      const masked: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(obj)) {
        const lowerKey = key.toLowerCase();
        const isSensitive = sensitiveFields.some((field) =>
          lowerKey.includes(field.toLowerCase()),
        );

        if (isSensitive) {
          masked[key] = '***MASKED***';
        } else if (typeof value === 'object' && value !== null) {
          masked[key] = mask(value);
        } else {
          masked[key] = value;
        }
      }
      return masked;
    }

    return obj;
  };

  return mask(data);
}
