class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGretting() {
      return `Hi. I am ${this.name}!`;
    }
    getDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
    }
  }
  
class Student extends Person {
    constructor(name, age, major) {
      super(name, age);          
      this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += `and their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    
    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let description = super.getDescription();
    
        if(this.hasHomeLocation()) {
            description += `and i'm visiting from ${this.homeLocation}`;
        }

        return description;
    }
}

  const me = new Traveler('Andrew Mead', 26, 'philadelphia');
  console.log(me.hasMajor());
  
  const other = new Traveler();
  console.log(other.hasMajor());

  