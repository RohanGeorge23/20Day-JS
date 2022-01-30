class Circle {
    // constructor to assign initial values
    constructor(radius, color) {
      this.radius = radius
      this.color = color
    }
  
    // returns radius of the circle
    getRadius () {
      return this.radius
    }
  
    // assigns new value to radius
    setRadius (radius) {
      this.radius = radius
    }
  
    // get color of the circle
    getColor () {
      return this.color
    }
    
  
    // assigns new value to color
    setColor (color) {
      this.color = color
    }
    toString(){
        return `Circle = [${this.radius,this.color}]`
    }
  
    // calculate area
    getArea () {
      return Math.PI * this.radius * this.radius
    }
  
    // calculate circumference
    getCircumference () {
      return 2 * Math.PI * this.radius;
    }
   }
  
   let myCircle = new Circle (1, 'RED',)
   console.log(myCircle.getRadius())
   console.log(myCircle.getColor())
   console.log(myCircle.getArea())
   console.log(myCircle.getCircumference())
   console.log(myCircle.toString())

  
   // after changing
   myCircle.setColor('Blue')
   myCircle.setRadius(2)
   console.log(myCircle.getRadius())
   console.log(myCircle.getColor())
   console.log(myCircle.getArea())
   console.log(myCircle.getCircumference())
  