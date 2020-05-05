import {Component} from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-pokemon';
  name = '';
  pokemons: Pokemon[] = [];

  constructor(private apiService: ApiService) {

  }

  searchPokemon() {
    this.apiService.search(this.name).subscribe((res) => {
      //

      console.log(res);
      this.pokemons.push(res);

    }, (err) => {
      console.log(err);
      alert('Pokemon not found');
    });
  }
}

export interface Pokemon {
  id: string;
  name: string;
  sprites: PokemonSprite;
}

export interface PokemonSprite {
  front_default: string;

}
