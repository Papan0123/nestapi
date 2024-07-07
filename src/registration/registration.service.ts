import { Injectable } from '@nestjs/common';
@Injectable()
export class RegistrationService{
    create():string{
        return 'This action adds a new registration';
    }
    findAll(): string {
        return 'This actions adds a new Registration';
      }
      createAdmin(): string {
        return 'This actions adds a new admin';
      }
      createUser(): string {
        return 'This actions adds a new user';
      }

}