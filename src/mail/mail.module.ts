import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: "smtp-mail.outlook.com", // hostname
          secureConnection: false, // TLS requires secureConnection to be false
          port: 587,
          auth: {
            user: `${process.env.EMAIL_ADDR}`,
            pass: `${process.env.EMAIL_PASS}`
          },
          tls: {
            rejectUnauthorized: false
          }
        },
        defaults: {
          from: `"No Reply" <${process.env.EMAIL_ADDR}>`
        },
        template: {
          dir: process.cwd() + '/dist/src/mail/templates/',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true
          }
        }
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule { }
