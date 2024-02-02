import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DepartmentService } from '../department/department.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.mysql.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private departmentService: DepartmentService,
  ) {}

  async create(createUserDto) {
    const dep = await this.departmentService.findOne(
      createUserDto.departmentId,
    );
    return this.userRepository.save({
      ...createUserDto,
      departmentName: dep,
      departmentId: dep,
    });
  }

  findAll() {
    return this.userRepository.find({ relations: ['department'] });
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
