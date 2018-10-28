import { Pet, PetType } from './pet';

export const cane: PetType = { key: 1, value: 'cane' }
export const pesce: PetType = { key: 2, value: 'pesce' }
export const furetto: PetType = { key: 3, value: 'furetto' }
export const animali: Pet[] = [
  {
    id: 0,
    name: 'Molly',
    petType: cane,
    fur: 1000,
    info: ['cicciona', 'grassa', 'morbidosa']
  },
  {
    id: 1,
    name: 'Vicky',
    petType: cane,
    fur: 3000,
    info: ['irrequieta', 'pucciosa']
  }, {
    id: 2,
    name: 'Nemo',
    petType: pesce,
    fur: 0,
    info: ['pinna atrofica', 'arancione']
  }, {
    id: 3,
    name: 'Girone',
    petType: furetto,
    fur: 5000,
    info: ['e i Marò?', 'ridateci i Marò']
  },{
    id: 4,
    name: 'Emily',
    petType: furetto,
    fur: 9000,
    info: ['bellissima', 'piccolissima']
  },{
    id: 5,
    name: 'Latorre',
    petType: cane,
    fur: 2000,
    info: ['Marò liBBeri']
  },{
    id: 6,
    name: 'Conte',
    petType: cane,
    fur: 0,
    info: ['pupazzo', 'avvocato degli italiani']
  },{
    id: 7,
    name: 'Salvini',
    petType: cane,
    fur: 7500,
    info: ['Salvini cane', 'fascista di merda', 'fai caà i maiali']
  },
]