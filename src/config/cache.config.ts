import '../utils/dotenv';
import { get } from 'env-var';

const tlsConfig = get('REDIS_TLS').asString()
  ? { tls: { path: get('REDIS_TLS').asString() } }
  : null;

export const cacheConfig = {
  host: get('REDIS_HOST').asString(),
  port: get('REDIS_PORT').default(6379).asPortNumber(),
  password: get('REDIS_PASSWORD').asString(),
  family: get('REDIS_FAMILY').default(4).asIntPositive(),
  ...tlsConfig,
};
