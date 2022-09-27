import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'toyota',
    //   model: 'corolla',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((c) => c.id === id);
    if (!car) throw new NotFoundException(`Car with is '${id}' not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    /*const car: Car = {
      id: uuid(),
      brand: createCarDto.brand,
      model: createCarDto.model,
    };*/
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    //validar si existe
    let carBD = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carBD = { ...carBD, ...updateCarDto, id };
        return carBD;
      }
      return car;
    });

    return carBD;
  }

  delete(id: string) {
    const carBD = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
