import { Controller, Get, VERSION_NEUTRAL, Version } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from '@app/common';
import { ConfigService } from '@nestjs/config';

@Controller({
  // path: 'user',
  // version: '1',
})
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @Version([VERSION_NEUTRAL, '1'])
  findAll() {
    console.log('');
    return this.appService.findAll();
  }

  @Get()
  @Version('2')
  findAll2() {
    return 'i am new one';
  }

  @Get('findError')
  @Version([VERSION_NEUTRAL, '1'])
  findError() {
    const a: any = {};
    console.log(a.b.c);
    return this.appService.getHello();
  }

  @Get('findBusinessError')
  @Version([VERSION_NEUTRAL, '1'])
  findBusinessError() {
    const a: any = {};
    try {
      console.log(a.b.c);
    } catch (error) {
      throw new BusinessException('你这个参数错了');
    }
    return this.appService.findAll();
  }

  @Get('getTestName')
  getTestName() {
    return this.configService.get('TEST_VALUE').name;
  }
}
