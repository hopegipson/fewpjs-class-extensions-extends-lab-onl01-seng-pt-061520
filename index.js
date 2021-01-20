// Your code here

class Polygon {
    constructor(arrayIntegers) {
    this.sides = arrayIntegers
    }
   
    get countSides() {
      return this.sides.length
    }

    get perimeter(){
        let perimeter = 0
        for (let i = 0; i < this.sides.length; i++) {   
            perimeter += this.sides[i]
          }
          return perimeter
    }
  }

  class Triangle extends Polygon {
    get isValid(){
        if (this.countSides != 3){
            return false}
        else if ((this.sides[0]+this.sides[1]) < this.sides[2]){
            return false}
        else if ((this.sides[0]+this.sides[2]) < this.sides[1]){
            return false}
        else if ((this.sides[1]+this.sides[2]) < this.sides[0]){
                return false}
        else {return true}
    }
  }

  class Square extends Polygon {
      get isValid(){
          if(this.countSides != 4){
            return false
          }
          else if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3])
          {return true}
          else{
              return false
          }
      }

      get area(){
         return this.sides[0] * this.sides[0]
      }

    

}