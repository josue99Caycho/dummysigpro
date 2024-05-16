import { Injectable } from "@angular/core";
import { PokeApiRespository } from "src/app/domain/repository/pokeapi/pokeapi.repository";


@Injectable({ 
    providedIn: 'root' 
})
export class PokeApiMockRepository extends PokeApiRespository {

    listPokemons: any = {
        "count": 1302,
        "next": "https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20",
        "previous": "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
        "results": [
            {
                "name": "josue prueba mock 1",
                "url": "https://pokeapi.co/api/v2/pokemon/21/"
            },
            {
                "name": "josue prueba mock 2",
                "url": "https://pokeapi.co/api/v2/pokemon/22/"
            },
            {
                "name": "ekans",
                "url": "https://pokeapi.co/api/v2/pokemon/23/"
            },
            {
                "name": "arbok",
                "url": "https://pokeapi.co/api/v2/pokemon/24/"
            }
        ]
    }

    override getAllPokemons(): Promise<any> {

        return new Promise((resolve, reject) => {
            resolve(this.listPokemons)
        });

    }
}