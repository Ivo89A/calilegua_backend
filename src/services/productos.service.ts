import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './../entities/producto.entity';
import { CreateProductDTO, UpdateProductDTO } from './../dtos/productos.dto';

@Injectable()
export class ProductosService {
  private idCont = 1;
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Prod A',
      descripcion: 'Descripcion del producto A',
      precio: 6500,
      stock: 1,
      origen: 'China',
      imagen: '',
    },
    {
      id: 2,
      nombre: 'Prod B',
      descripcion: 'Descripcion del producto B',
      precio: 7500,
      stock: 1,
      origen: 'Japón',
      imagen: '',
    },
    {
      id: 3,
      nombre: 'Prod C',
      descripcion: 'Descripcion del producto C',
      precio: 9500,
      stock: 7,
      origen: 'EEUU',
      imagen: '',
    },
  ];

  findAll() {
    return this.productos;
  }

  findOne(id: number) {
    const product = this.productos.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`El producto con id: #${id} no existe`);
    }
    return product;
  }

  create(payload: CreateProductDTO) {
    this.idCont = this.idCont + 1;
    const newProduct = {
      id: this.idCont,
      ...payload,
    };
    this.productos.push(newProduct);
    return newProduct;
  }

  /*update(id: number, payload: UpdateProductDTO) {
    const product = this.findOne(id);
  }*/

  remove(id: number) {
    const index = this.productos.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`El producto #${id} no se encuentra`);
    }
    this.productos.splice(index, 1);
    return true;
  }
}
