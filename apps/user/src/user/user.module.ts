import { DatabaseModule } from '@app/common/database/database.module';
import { Module } from '@nestjs/common';
import { DepartmentModule } from '../department/department.module';
import { UserController } from './user.controller';
import { UserProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule, DepartmentModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
})
export class UserModule {}
