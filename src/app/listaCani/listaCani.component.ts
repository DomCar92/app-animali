import { Component } from '@angular/core';
import { Pet } from '../models/pet';
import { animali } from '../models/fakePets';

@Component({
  selector: 'listaCani',
  templateUrl: 'listaCani.component.html'
})

export class listaCaniComponent {
  title = 'Lista Cani';

listaCompleta: Pet[] = animali;

listaCani: Pet[] = this.listaCompleta.filter(lista => lista.petType.value==='cane')
}
