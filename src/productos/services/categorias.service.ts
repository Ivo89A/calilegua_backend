import { Injectable, NotFoundException } from '@nestjs/common';
import { Categorias } from '../entities/categorias.entity';
//import { CreateProductDTO, UpdateProductDTO } from './../dtos/productos.dto.ts';

@Injectable()
export class CategoriasService {
  private idCont = 1;
  private categorias: Categorias[] = [
    {
      id: 1,
      nombre: 'Categoria A',
      descripcion: 'Descripcion del categoria A',
      stock: 1,
    },
    {
      id: 2,
      nombre: 'Categoria B',
      descripcion: 'Descripcion del categoria B',
      stock: 1,
    },
    {
      id: 3,
      nombre: 'Categoria C',
      descripcion: 'Descripcion del categoria C',
      stock: 7,
    },
  ];

  findAll() {
    return this.categorias;
  }

  findOne(id: number) {
    const category = this.categorias.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`La categoria con id: #${id} no existe`);
    }
    return category;
  }

  create(payload: any) {
    this.idCont = this.idCont + 1;
    const newCategory = {
      id: this.idCont,
      ...payload,
    };
    this.categorias.push(newCategory);
    return newCategory;
  }

  /*update(id: number, payload: UpdateCategoryDTO) {
    const product = this.findOne(id);
  }*/

  remove(id: number) {
    const index = this.categorias.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`La categoria #${id} no se encuentra`);
    }
    this.categorias.splice(index, 1);
    return true;
  }
}
