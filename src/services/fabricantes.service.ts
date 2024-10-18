import { Injectable, NotFoundException } from '@nestjs/common';
import { Fabricantes } from './../entities/fabricantes.entity';
import { CreateProductDTO, UpdateProductDTO } from './../dtos/fabricantes.dto';

@Injectable()
export class FabricantesService {
  private idCont = 1;
  private fabricantes: Fabricantes[] = [
    {
      id: 1,
      nombre: 'ACME',
      origen: 'China',
    },
    {
      id: 2,
      nombre: 'Prod B',
      origen: 'Japón',
    },
    {
      id: 3,
      nombre: 'Prod C',
      origen: 'EEUU',
    },
  ];

  findAll() {
    return this.fabricantes;
  }

  findOne(id: number) {
    const product = this.fabricantes.find((item) => item.id === id);
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
    this.fabricantes.push(newProduct);
    return newProduct;
  }

  /*update(id: number, payload: UpdateProductDTO) {
    const fabricante = this.findOne(id);
  }*/

  remove(id: number) {
    const index = this.fabricantes.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`El producto #${id} no se encuentra`);
    }
    this.fabricantes.splice(index, 1);
    return true;
  }
}
