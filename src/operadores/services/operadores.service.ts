import { Injectable, Inject } from '@nestjs/common';
//import { Operador } from '../entities/operadores.entity'
import { Pedido } from '../entities/pedidos.entity';
//import { CreateOperadorDTO, UpdateOperadorDTO } from '../dtos/operador.dto';
import { ProductosService } from '../../productos/services/productos.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OperadoresService {
  findOne: any;
  constructor(
    private readonly productsService: ProductosService,
    private configService: ConfigService, //Inyeccion de dependencias de ConfigService
    @Inject('APIKEY') private apiKey: string,
  ) {}

  findAll() {
    const apiKey = this.configService.get('API_KEY');
    const dbname = this.configService.get('DATABASE_NAME');
    console.log(apiKey, dbname);
    return this.operadores;
  }

  getOrderByUser(userId: number): Pedido {
    const operador = this.findOne(userId);
    return {
      date: new Date(),
      operador,
      products: this.productsService.findAll(),
    };
  }
}
