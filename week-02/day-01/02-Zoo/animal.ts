'use strict'

//abstract class Animal includes most needed properties
abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  abstract breed();
}

//implement from the abstract class animal
export class Mammal extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  //redefine function breed()
  breed(): string {
    return 'pushing miniature versions out';
  }
}

//implement from the abstract class animal
export class Reptile extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  //redefine function breed()
  breed(): string {
    return 'laying eggs';
  }
}

//implement from the abstract class animal
export class Bird extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  //redefine function breed()
  breed(): string {
    return 'laying eggs';
  }
}