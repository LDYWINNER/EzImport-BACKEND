import { IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateBoardDto {
  @MinLength(1)
  @MaxLength(20)
  @IsOptional()
  name?: string;

  @IsOptional()
  content?: string;
}
