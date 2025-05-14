import { Global, Module } from '@nestjs/common';
import { WebSocketService } from './socket.service';

@Global()
@Module({
  providers: [WebSocketService],
  exports: [WebSocketService],
})
export class WebSocketModule {}
