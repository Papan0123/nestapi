import { Injectable } from '@nestjs/common';
@Injectable()
export class InvoicesService{
    InvoicesInAssending():string{
        return 'This action returns invoice in assending order';
    }
    InvoicesInDesending():string{
        return'This action return invoice in desending order';
    }
}