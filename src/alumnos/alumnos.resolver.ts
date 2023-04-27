import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AlumnosService } from './alumnos.service';
import { Alumno } from './entities/alumno.entity';
import { CreateAlumnoInput } from './dto/create-alumno.input';
import { UpdateAlumnoInput } from './dto/update-alumno.input';

@Resolver(() => Alumno)
export class AlumnosResolver {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Mutation(() => Alumno)
  createAlumno(@Args('createAlumnoInput') createAlumnoInput: CreateAlumnoInput) {
    return this.alumnosService.create(createAlumnoInput);
  }

  @Query(() => [Alumno], { name: 'alumnos' })
  findAll() {
    return this.alumnosService.findAll();
  }

  @Query(() => Alumno, { name: 'alumno' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.alumnosService.findOne(id);
  }

  @Mutation(() => Alumno)
  updateAlumno(@Args('updateAlumnoInput') updateAlumnoInput: UpdateAlumnoInput) {
    return this.alumnosService.update(updateAlumnoInput.id, updateAlumnoInput);
  }

  @Mutation(() => Alumno)
  removeAlumno(@Args('id', { type: () => Int }) id: number) {
    return this.alumnosService.remove(id);
  }
}
