import { Injectable } from '@nestjs/common';
@Injectable()
export class CustomerService{
    TotalUser():string{
        return 'This action returns total users';
    }
    TotalRevenue():string{
        return'This action return total revenue';
    }
}