import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  findAll() {
    return 'find all boards';
  }
}
