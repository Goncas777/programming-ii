class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} makes a noise.`;
    }
    static info() {
        return "I am an animal class."
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // Call parent constructor
    }
  
    speak() {
      return `${super.speak()} ${this.name} barks!`;
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name); // Call parent constructor
    }
  
    speak() {
      return `${super.speak()} ${this.name} Meow!`;
    }
  }

  const dog = new Dog("Rex");
  const cat = new Cat("GatinhoPeludão");

  console.log(dog.speak()); // "Rex makes a noise. Rex barks!"
  console.log(cat.speak());
  console.log(Animal.info());