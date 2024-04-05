import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
@ApiTags('Board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number) {
    return `find board by id: ${id}`;
  }

  @Post()
  create(@Body(new ValidationPipe()) data: CreateBoardDto) {
    return `create board with data: ${JSON.stringify(data)}`;
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) data: UpdateBoardDto,
  ) {
    return `update board by id: ${id} with data: ${JSON.stringify(data)}`;
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return `delete board by id: ${id}`;
  }
}