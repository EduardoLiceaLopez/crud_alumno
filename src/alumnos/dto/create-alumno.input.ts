import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlumnoInput {
  
  
  @Field((type) => Int)
	idalumno: number;

  @Field((type) => Int)
	nocta: number;

  
  @Field((type) => String)
  
	noalumno: string;

  
  @Field((type) => String)
	appaterno: string;

  
  @Field((type) => String)
	apmaterno: string;
}
