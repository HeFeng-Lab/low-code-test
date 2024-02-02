import { DatabaseModule, getConfig } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageModule } from './page/page.module';
import { SiteModule } from './site/site.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    SiteModule,
    PageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
