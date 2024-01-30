

// 1.Class - Movie

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  
  const moviesArray = [
    new Movie("Insideout-2", "Disney", "PG"),
    new Movie("Despicable-4", "Universal", "PG-13")
  ];
  

  const pgMoviesArray = Movie.getPG(moviesArray);
  
  // Logging the results
  console.log("Casino Royale:", casinoRoyale);
  console.log("Movies Array:", moviesArray);
  console.log("PG Movies Array:", pgMoviesArray);
  

// 2.Circle - Class

class Circle {
    constructor(radius, color){
        this.radius=radius ;
        this.color=color;
    }     

    get radiusCircle(){
        return this.radius;
    }

    set radiusCircle(radius){
        this.radius=radius;
    }

    get colorCircle(){
        return this.color
    }

    get toString(){
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }
    
    get areaCircle(){
        console.log(Math.PI)
        console.log(Math.pow(this.radius,2))
        console.log(Math.PI*Math.pow(this.radius,2))
        return Math.PI*Math.pow(this.radius,2)
    }

    get circumferenceCircle(){
        return (2*Math.PI*this.radius)
    }
}

const c1 = new Circle(1.0,'red')
c1.radiusCircle = 2.0
console.log(c1)
console.log(c1.radiusCircle)
console.log(c1.colorCircle)
console.log(c1.toString)
console.log(c1.areaCircle)
console.log(c1.circumferenceCircle)

const c2 = new Circle(2.0,'green')
c2.radiusCircle = 3.0
console.log(c2)
console.log(c2.radiusCircle)
console.log(c2.colorCircle)
console.log(c2.toString)
console.log(c2.areaCircle)
console.log(c2.circumferenceCircle)


// 3.Write a “person” class to hold all the details.

class Person {
    constructor(firstname, lastname, age, gender, address) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
    }

    displayDetails() {
        console.log(`Name: ${this.firstname} ${this.lastname}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
    }
}

let person1 = new Person("vijay", "pranesh", 30, "Male");

person1.displayDetails();

let person2 = new Person("priya", "vijay", 23, "Female");

person2.displayDetails();



// 4.write a class to calculate the Uber price.

  class UberCalculator {
    constructor(baseFare, costPerKM, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKM = costPerKM;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distance, time) {
   
      const distanceCost = distance * this.costPerKM;
      const timeCost = time * this.costPerMinute;
  
      const totalPrice = this.baseFare + distanceCost + timeCost;
  
      return totalPrice;
    }
  }
  

  const uberCalculator = new UberCalculator(50, 10, 10);
  
  const distance = 10;
  const time = 20; 
  
  const totalPrice = uberCalculator.calculatePrice(distance, time);
  
  console.log(`Uber Price: ${totalPrice.toFixed(2)} Rupees`);