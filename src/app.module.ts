import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationController } from './registration/registration.controller';

@Module({
  imports: [],
  controllers: [AppController,RegistrationController],
  providers: [AppService],
})
export class AppModule {}
