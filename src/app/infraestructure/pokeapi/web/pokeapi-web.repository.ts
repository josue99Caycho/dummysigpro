import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { PokeApiRespository } from 'src/app/domain/repository/pokeapi/pokeapi.repository';
import { POKI_API_V2 } from 'src/app/shared/helpers/constants/url.constant';

@Injectable({ 
    providedIn: 'root' 
})
export class PokeApiWebRepository extends PokeApiRespository {
    
    constructor(
        private http: HttpClient
    ) {
        super();
    }

    override getAllPokemons(): Promise<any> {
        const url = `${POKI_API_V2}?offset=20&limit=20`;
        return lastValueFrom(this.http.get<any>(url));
    }
}