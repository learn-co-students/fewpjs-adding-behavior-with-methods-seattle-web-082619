class Animal {
  constructor(name, sex, sound='?') {
    this.name = name;
    this.sex = sex;
    this.sound = sound;
  }

  speak() {
    return `${this.name} says ${this.sound}!`;
  }
}

class Cat extends Animal {
  constructor(name, sex, sound) {
    super(name, sex, 'meow');
  }
}

class Dog extends Animal {
  constructor(name, sex, sound) {
    super(name, sex, 'woof');
  }
}

class Bird extends Animal {
  constructor(name, sex, sound) {
    super(name, sex, 'squawk');
  }

  speak() {
    return (this.sex === 'male') ? 
      this.maleSpeak() : super.speak();
  }

  maleSpeak() {
    return `It's me! ${this.name}, the parrot!`;
  }
}
