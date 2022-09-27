import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'toyota',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'hyundai',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'mazda',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'nissan',
    createAt: new Date().getTime(),
  },
];
