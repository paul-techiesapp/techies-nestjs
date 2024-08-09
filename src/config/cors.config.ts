import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const CORS_CONFIG: CorsOptions = {
  origin: (origin: any, callback: any) => {
    if (
      !origin ||
      process.env.CORS_VALIDATION === 'false' ||
      process.env.CORS_ORIGINS_WHITELIST?.split(',').includes(origin)
    ) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  exposedHeaders: 'Content-Disposition',
};
