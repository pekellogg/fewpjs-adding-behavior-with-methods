class Cat {
  constructor(name, gender_id) {
    this.name = name;
    this.gender_id = gender_id;
  }
  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, gender_id) {
    this.name = name;
    this.gender_id = gender_id;
  }
  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, gender_id) {
    this.name = name;
    this.gender_id = gender_id;
  }
  speak() {
    if (this.gender_id == "male") {
      return `It's me! ${this.name}, the parrot!`;
    }
    return `${this.name} says squawk!`;
  }
}