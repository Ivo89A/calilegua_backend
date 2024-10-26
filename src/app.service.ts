import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../config';

@Injectable()
export class AppService {
  constructor(
    @Inject('APIKEY') private apiKey: string,
    @Inject('TAREA_ASINC') private tarea: any[],
    @Inject(config.KEY) private configServ: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    const apiKey = this.apiKey;
    const dbname = this.configServ.db.name;
    const dbport = this.configServ.db.port;
    return `La llave de la aplicacion es: ${apiKey} y el nombre y puerto de la DB es: ${dbname}, ${dbport}`;
  }
}
