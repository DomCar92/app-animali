import { Component, OnInit, Input } from '@angular/core';

import { Pet } from '../models/pet';

@Component({
  selector: 'animali',
  templateUrl: 'animali.component.html',
  styleUrls: ['./animali.component.scss']
})
export class AnimaliComponent implements OnInit {
  @Input()
  listaAnimali: Pet[];

  constructor() {}

  ngOnInit() {
    console.log(this.listaAnimali);
  }
}

// Al click su un elemento della lista, voglio vedere il titolo "hai selezionato + il nome dell'animale selezionato",
// ricorda che il titolo NON è in questo componente, avrai bisogno di un Output
