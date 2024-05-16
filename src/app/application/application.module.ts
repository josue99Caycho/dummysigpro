import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeApiRespository } from '../domain/repository/pokeapi/pokeapi.repository';
import { PokeApiWebRepository } from '../infraestructure/pokeapi/web/pokeapi-web.repository';
import { PokeApiMockRepository } from '../infraestructure/pokeapi/mock/pokeapi-mock.repository';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: PokeApiRespository, useClass: PokeApiWebRepository }
  ]
})
export class ApplicationModule { }
