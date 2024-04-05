import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateBoardDto {
  @MinLength(1)
  @MaxLength(20)
  @IsNotEmpty()
  @ApiProperty({
    description: '이름',
    required: true,
    example: '홍길동',
  })
  name: string;

  @MinLength(1)
  @IsNotEmpty()
  @ApiProperty({
    description: '내용',
    required: true,
    example: '안녕하세요',
  })
  content: string;
}
