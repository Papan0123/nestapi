import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/API')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(): string {
    return this.appService.getHello();
  }
}
