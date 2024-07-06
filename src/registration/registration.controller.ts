import { Controller, Get, Post } from '@nestjs/common';
@Controller('/API')
export class RegistrationController {
  constructor() {}

  @Post()
  create(): string {
    return 'This actions adds a new Registration';
  }
  @Get()
  findAll(): string {
    return 'This actions adds a new Registration';
  }
  @Post('/admin')
  createAdmin(): string {
    return 'This actions adds a new Registration';
  }
  @Post('/user')
  createUser(): string {
    return 'This actions adds a new Registration';
  }
}