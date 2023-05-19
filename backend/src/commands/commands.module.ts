import { PingCommand } from './utility/ping.command';
import { Module } from '@nestjs/common';

@Module({
  providers: [PingCommand],
})
export class CommandsModule {}