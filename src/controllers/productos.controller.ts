import { Body, Controller, Post, Delete, Param, Put } from '@nestjs/common';

@Controller('productos')
export class ProductosController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }

  @Put('product/:idProduct')
  updateProducto(
    @Param('idProduct') idProduct: string,
    @Body() body: any,
  ): any {
    return {
      idProduct: idProduct,
      nombre: body.nombre,
      precio: body.precio,
    };
  }

  @Delete('idProduct')
  deleteProducto(@Param('idProduct') idProduct: string): any {
    return {
      idProduct: idProduct,
      delete: true,
      count: 1,
    };
  }
}
