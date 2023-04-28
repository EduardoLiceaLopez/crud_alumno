import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlumnoInput } from './dto/create-alumno.input';
import { UpdateAlumnoInput } from './dto/update-alumno.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnosService {

  constructor(
    @InjectRepository(Alumno)
    private alumnoRepository: Repository<Alumno>,
  ){};



  async create(createAlumnoInput: CreateAlumnoInput) {

    const alumno = await this.alumnoRepository.findOneBy({idalumno: createAlumnoInput.idalumno})

    if (!alumno){
      const newAlumno = this.alumnoRepository.create(createAlumnoInput);
      return this.alumnoRepository.save(newAlumno);
    }else {
      throw new ConflictException(`Alumno con el id ${createAlumnoInput.idalumno} ya existe`);
    }
  }

  findAll() {
    return this.alumnoRepository.find();
  }

  async findOne(id: number) {
    const alumno = await this.alumnoRepository.findOneBy({idalumno: id})

    if(alumno){
      return alumno
    }else{
      throw new NotFoundException(`Alumno con el ID ${id} no encontrado`);
    }
  }

  async update(id: number, updateAlumnoInput: UpdateAlumnoInput) {
    const alumno = await this.alumnoRepository.findOneBy({idalumno: id})
    if (!alumno){
      throw new NotFoundException (`Alumno con el ID ${id} no encontrado`);
    }else{
      await this.alumnoRepository.update(id, updateAlumnoInput);
      return this.alumnoRepository.findOneBy({idalumno: id}), {message: 'Se ha actualizado exitosamente'};
    }
  }

  async remove(id: number): Promise<any> {
    const alumno = await this.alumnoRepository.findOneBy({idalumno: id})

    if (!alumno){
      throw new NotFoundException (`Alumno con el ID ${id} no encontrado`);
    }else{
      const alumnoDelete = await this.alumnoRepository.delete(id);
        return alumnoDelete.affected !==0;
     
    }
  }
}
