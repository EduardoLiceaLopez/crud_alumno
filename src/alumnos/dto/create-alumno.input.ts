import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlumnoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
