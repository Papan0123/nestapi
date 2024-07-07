import { Controller, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private readonly cutomerservice:CustomerService){}

    @Post()
    TotalUser():string{
        return this.cutomerservice.TotalUser();
    }
    @Post('/totalrevenue')
    TotalRevenue():string{
        return this.cutomerservice.TotalRevenue();
    }
}
