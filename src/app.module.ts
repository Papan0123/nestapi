import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoicesModule } from './invoices/invoices.module';
import { RegistrationModule } from './registration/registration.module';




@Module({
  imports: [ InvoicesModule,RegistrationModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
