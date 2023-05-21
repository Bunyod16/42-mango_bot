import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayInit } from '@nestjs/websockets';
import { AppService } from './app.service';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {
  constructor (private readonly appService: AppService) {}
  @WebSocketServer() server: any;

  afterInit(server: any) {
    this.appService.setServer(server);
    console.log('Server set.');
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    client.emit('message', 'Hello World!');
    return 'Hello world!';
  }
}
