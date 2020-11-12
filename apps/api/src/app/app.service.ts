import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }
}
