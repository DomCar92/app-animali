export class PetType {
  key: number;
  value: string;
}

export class Pet {
  id: number;
  name: string;
  petType: PetType;
  fur: number;
  info?: string[]
}