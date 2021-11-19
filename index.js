//Diameter = radius • 2
//Circumference = π • diameter
//Area = π • radius2



class Circle {
     
    constructor(radius) {
      this.radius = radius
    } 
  
    set diameter(diameter){
      this.radius = (diameter/2)
      
    }
  
    set circumference(circumference){
        this.radius = ((circumference/2)/Math.PI)
    }
  
    set area (area) {
        this.radius = Math.sqrt(area/Math.PI)
    }
  
    get diameter() {
     return  this.radius * 2
     
    }
  
    get circumference () {
      //console.log(this.diameter)
      return ((this.radius * 2) * Math.PI)
    }
  
    get area () {
      return Math.PI * (this.radius * this.radius)
    }
  }

  