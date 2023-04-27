import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alumno')
@ObjectType()
export class Alumno {

  @PrimaryGeneratedColumn()
  @Field((type) => Int)
	idalumno: number;

  @Column()
  @Field((type) => Int)
	nocta: number;

  @Column()
  @Field((type) => String)
	noalumno: string;

  @Column()
  @Field((type) => String)
	appaterno: string;

  @Column()
  @Field((type) => String)
	apmaterno: string;

}
