import { Controller, Get, Param, Response, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getCode(@Request() request: any): Promise<string> {
    return this.appService.getCode(request);
  }

  @Get('login/:id')
  getId(@Param() param: any, @Response() response: any): void {
    return this.appService.redirect42OAuth(param, response);
  }
}
