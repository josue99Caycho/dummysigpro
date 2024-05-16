import { Component, OnInit } from '@angular/core';
import { GetPokemonUsecase } from './application/pokeapi/get-pokemon.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Sigpro Plus';
  listAllPokemons: any[] = [];

  constructor(private _getPokemons: GetPokemonUsecase) {}

    
  async getAllPokemon(): Promise<void> {

    const response = await this._getPokemons.execute();
    this.listAllPokemons = response.results;

  }
  
}
