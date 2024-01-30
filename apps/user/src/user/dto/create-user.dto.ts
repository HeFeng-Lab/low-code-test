import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'hefeng6500' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ example: '兰亭古墨' })
  username: string;

  @ApiProperty({ example: 'hefeng' })
  enName?: string;

  @IsNotEmpty()
  @ApiProperty({ example: '' })
  email: string;

  @ApiProperty({ example: '' })
  avatar?: string;

  @ApiProperty({ example: '' })
  mobile?: string;

  @ApiProperty({ example: '' })
  departmentName?: string;

  @ApiProperty({ example: 0 })
  departmentId?: number;
}
