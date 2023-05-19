import { Command, Handler } from '@discord-nestjs/core';
import { CommandInteraction } from 'discord.js';
import { Injectable } from '@nestjs/common';

@Command({
  name: 'ping',
  description: 'Pings Mango Bot.',
})
@Injectable()
export class PingCommand {
  @Handler() 
  async execute(interaction: CommandInteraction) {
	return interaction.reply({ content: "Pong!", ephemeral: true });
  }
}