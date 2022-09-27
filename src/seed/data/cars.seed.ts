import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'toyota',
    model: 'yaris',
  },
  {
    id: uuid(),
    brand: 'hyundai',
    model: 'accent',
  },
  {
    id: uuid(),
    brand: 'mazda',
    model: '2 sedan',
  },
  {
    id: uuid(),
    brand: 'nissan',
    model: 'versa',
  },
];
