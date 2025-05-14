import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import Redis from 'ioredis';
import { ServerOptions } from 'socket.io';
import { cacheConfig } from 'src/config/cache.config';

export class RedisIoAdapter extends IoAdapter {
  private adapterConstructor: ReturnType<typeof createAdapter>;

  async connectToRedis(): Promise<void> {
    // Publish các message
    const pubClient = new Redis({
      host: cacheConfig.host,
      port: cacheConfig.port,
      password: cacheConfig.password,
      family: cacheConfig.family | 4,
      tls: cacheConfig.tls,
      connectTimeout: 3000,
      retryStrategy: (times) => Math.min(times * 50, 2000),
    });

    // Subcribe các message + tạo ra instance khác
    const subClient = pubClient.duplicate();
    // Connect tới các instance pub + sub
    await Promise.all([pubClient.connect(), subClient.connect()]);
    // Tạo redis adapter cho socket.io, giúp các instance sync với nhau
    this.adapterConstructor = createAdapter(pubClient, subClient);
  }

  createIOServer(port: number, options?: ServerOptions) {
    // tạo server
    const server = super.createIOServer(port, options);
    // gắn Redis Adapter vào server
    server.adapter(this.adapterConstructor);
    return server;
  }
}
