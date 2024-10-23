import { Injectable, Inject } from '@nestjs/common';

//import { ConfigType } from 'nestjs/config';
//import config from '/.config';

@Injectable()
export class AppService {
  constructor(@Inject('APIKEY') private apiKey: string) {}
  getHello(): string {
    return 'Hello World!';
    /*const apiKey = this.config.get<string>('APIKEY');
    const dbname = this.config.get('DB_NAME');
    const apiKey = this.configServ.apiKey;
    const dbname = this.configServ.database.name;
    const dbport = this.configServ.database.port;
    return 'La lave de la aplicacion es: ${apiKey} y el nombre y puerto de la DB: ${dbname}, ${dbport}';*/
  }
}
