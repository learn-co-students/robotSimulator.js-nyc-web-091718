const directions = ["north", "east", "south", "west"]

class Robot {
	constructor(coordinates = [0,0], bearing = "north") {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
  }

  setBearing(direction){
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(placeDetails){
    this.setCoordinates(placeDetails.x, placeDetails.y)
    this.setBearing(placeDetails.direction)
  }

  turnRight(){
    let currentDirectionIndex = directions.findIndex((direction) => this.bearing === direction)
    if ((currentDirectionIndex + 1) >= directions.length) {
      currentDirectionIndex = 0
    } else {
      currentDirectionIndex++
    }
    this.bearing = directions[currentDirectionIndex]
  }

  turnLeft(){
    switch (this.bearing) {
      case 'north': this.bearing = "west"; break;
      case 'east': this.bearing = "north"; break;
      case 'south': this.bearing = "east"; break;
      case 'west': this.bearing = "south"; break;
    }
  }

  advance(){
    switch (this.bearing) {
      case 'north': this.coordinates[1] += 1; break;
      case 'east': this.coordinates[0] += 1 ; break;
      case 'south': this.coordinates[1] -= 1 ; break;
      case 'west': this.coordinates[0] -=1 ; break;
    }
  }

  translateInstructions(instructions){
    instructions.split("").forEach(instruction => {
      switch (instruction) {
        case "L": this.turnLeft(); break;
        case "R": this.turnRight(); break;
        case "A": this.advance(); break;
      }
    })
  }

} // End of Robot Class
