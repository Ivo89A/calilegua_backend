import { Injectable, Inject } from '@nestjs/common';
//mport { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(@Inject('<APIKEY>') private apiKey: string) {}

  getHello(): string {
    // Use the injected config to retrieve values
    const apiKey = this.apiKey; // Access DB_NAME directly from config

    // Use template literals correctly with backticks
    return `La clave de la aplicacion es: ${this.apiKey} `;
  }
}
