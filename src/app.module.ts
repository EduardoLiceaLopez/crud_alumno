import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosModule } from './alumnos/alumnos.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'scr/schema.gql'),
    sortSchema: true,
  }), 
  TypeOrmModule.forRoot({
    type: 'mysql',
    database: 'alumno',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'info05e'
  }) , 
  AlumnosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
