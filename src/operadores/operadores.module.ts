import { Module } from '@nestjs/common';
import { OperadoresController } from './controllers/operadores.controller';
import { OperadoresService } from './services/operadores.service';

@Module({
  controllers: [OperadoresController],
  providers: [OperadoresService],
})
export class OperadoresModule {}
