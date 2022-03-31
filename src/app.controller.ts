import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly mailService: MailService) {}

  @Get()
  index() {
    return this.mailService.sendEmail()
  }
}
