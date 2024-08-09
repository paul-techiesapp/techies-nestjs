import { z } from 'zod';

export const APP_CONFIG = {
  environment: process.env.NODE_ENV,
  isProductionEnv: process.env.NODE_ENV === 'production',
  isDevelopmentEnv: process.env.NODE_ENV === 'development',
  port: Number(process.env.PORT),
  database: {
    driver: process.env.DB_DRIVER as any,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    synchronize: process.env.DB_SYNC_SCHEMA === 'true',
    logging: true,
  },
};

const envSchema = z.object({
  environment: z.enum(['development', 'production', 'test']),
  isProductionEnv: z.boolean().optional(),
  isDevelopmentEnv: z.boolean().optional(),
  port: z.number().default(3000),
  database: z.object({
    driver: z.string(),
    host: z.string(),
    port: z.number(),
    username: z.string(),
    password: z.string(),
    name: z.string(),
    synchronize: z.boolean().optional(),
    logging: z.boolean().optional(),
  }),
});

export type Env = z.infer<typeof envSchema>;

export const appConfiguration = () => {
  return envSchema.parse(APP_CONFIG);
};
