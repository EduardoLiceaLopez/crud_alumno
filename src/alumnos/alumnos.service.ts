import { Injectable } from '@nestjs/common';
import { CreateAlumnoInput } from './dto/create-alumno.input';
import { UpdateAlumnoInput } from './dto/update-alumno.input';

@Injectable()
export class AlumnosService {
  create(createAlumnoInput: CreateAlumnoInput) {
    return 'This action adds a new alumno';
  }

  findAll() {
    return `This action returns all alumnos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  update(id: number, updateAlumnoInput: UpdateAlumnoInput) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
