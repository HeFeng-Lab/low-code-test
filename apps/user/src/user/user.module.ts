import { DatabaseModule } from '@app/common/database/database.module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
})
export class UserModule {}
