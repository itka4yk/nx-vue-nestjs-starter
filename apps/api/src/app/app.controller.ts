import { Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { IGetGreeterRequest, IGetGreeterResponse } from '@vue-nest/api.contract';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Query() { name }: IGetGreeterRequest): IGetGreeterResponse {
    return {
      greet: this.appService.greet(name),
    };
  }
}
