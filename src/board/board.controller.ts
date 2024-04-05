import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return `find board by id: ${id}`;
  }

  @Post()
  create(@Body() data) {
    return `create board with data: ${JSON.stringify(data)}`;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data) {
    return `update board by id: ${id} with data: ${JSON.stringify(data)}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return `delete board by id: ${id}`;
  }
}
