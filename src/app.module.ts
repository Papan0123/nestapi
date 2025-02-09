import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoicesModule } from './invoices/invoices.module';
import { RegistrationModule } from './registration/registration.module';
import { CustomerModule } from './customer/customer.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';




@Module({
  imports: [ InvoicesModule,RegistrationModule,CustomerModule,MongooseModule.forRoot( 'mongodb://TechnophileFirdous:Zuni2058Alam@ac-k5g9okb-shard-00-00.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-01.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-02.kzuwf7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjy27e-shard-0&authSource=admin&retryWrites=true&w=majority',), StudentsModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
