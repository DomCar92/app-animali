import { Component } from '@angular/core';
import { Pet } from '../models/pet';
import { animali } from '../models/fakePets';

@Component({
  selector: 'listaFuretti',
  templateUrl: 'listaFuretti.component.html'
})

export class listaFurettiComponent {
  title = 'Lista Furetti'

  listaCompleta: Pet[] = animali;

listaFuretti: Pet[] = this.listaCompleta.filter(lista => lista.petType.value==='furetto')

}