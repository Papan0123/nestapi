import { Controller, Post } from '@nestjs/common';
import { InvoicesService } from './invoices.service';

@Controller('/invoices')
export class InvoicesController {
  
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post('/InvoicesInAssending')
  InvoiceInAssending(): string {
    return this.invoicesService.InvoicesInAssending();
  }
  @Post('/InvoicesInDesending')
  InvoiceInDesending(): string {
    return this.invoicesService.InvoicesInDesending();
  }
}