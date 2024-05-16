import { Injectable } from "@angular/core";
import { UseCasePromise } from 'src/app/domain/base/use-case-promise';
import { PokeApiRespository } from 'src/app/domain/repository/pokeapi/pokeapi.repository';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonUsecase implements UseCasePromise<any, any> {

  constructor(private repository: PokeApiRespository) { }

  execute(): Promise<any> {
    return this.repository.getAllPokemons();
  }

}
