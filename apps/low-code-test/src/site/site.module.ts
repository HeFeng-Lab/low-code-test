import { Module } from '@nestjs/common';
import { Site } from './entities/site.mongo.entity';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';

@Module({
  controllers: [SiteController],
  providers: [
    SiteService,
    {
      provide: 'SITE_REPOSITORY',
      useFactory: async (AppDataSource) =>
        await AppDataSource.getRepository(Site),
      inject: ['MONGODB_DATA_SOURCE'],
    },
  ],
})
export class SiteModule {}
