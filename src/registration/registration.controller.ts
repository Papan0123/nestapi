import { Controller, Get, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';
@Controller('/registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  create(): string {
    return this.registrationService.create();
  }
  @Get()
  findAll(): string {
    return this.registrationService.findAll();
  }
  @Post('/admin')
  createAdmin(): string {
    return this.registrationService.createAdmin();
  }
  @Post('/user')
  createUser(): string {
    return this.registrationService.createUser();
  }
}