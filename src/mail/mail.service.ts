import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail() {
    
    
    await this.mailerService.sendMail({
      to: "",
      // from: '"Support Team" <support@example.com>', // override default from,
      subject: "Testando",
      template: "test",
      context: {
      
      }
    })
  }
}
