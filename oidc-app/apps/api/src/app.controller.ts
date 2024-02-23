import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';

class CreateCatDto {
  @ApiProperty()
  name: string;
}

@Controller('app')
@ApiTags('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiOkResponse({
    type: CreateCatDto
  })
  getHello(): CreateCatDto {
    return { name: this.appService.getHello() + 'bbbbbbbbbbbbbbbbbb' };
  }
}
