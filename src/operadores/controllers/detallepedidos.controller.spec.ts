import { Test, TestingModule } from '@nestjs/testing';
import { DetallepedidosController } from './detallepedidos.controller';

describe('DetallepedidosController', () => {
  let controller: DetallepedidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallepedidosController],
    }).compile();

    controller = module.get<DetallepedidosController>(DetallepedidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
