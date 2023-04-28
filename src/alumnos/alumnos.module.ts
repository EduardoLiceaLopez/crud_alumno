import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosResolver } from './alumnos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno])],
  providers: [AlumnosResolver, AlumnosService],
})
export class AlumnosModule {}
