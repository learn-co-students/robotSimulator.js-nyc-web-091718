class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
    this.validDirections = ["north", "south", "east", "west"]
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(direction) {
    if (this.validDirections.includes(direction)) {
      this.bearing = direction;
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  place(placement) {
    this.setCoordinates(placement.x, placement.y);
    this.setBearing(placement.direction);
  }

  turnRight() {
    switch (this.bearing) {
      case "north":
      this.setBearing("east")
      break;
      case "east":
      this.setBearing("south")
      break;
      case "south":
      this.setBearing("west")
      break;
      case "west":
      this.setBearing("north")
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case "north":
      this.setBearing("west")
      break;
      case "east":
      this.setBearing("north")
      break;
      case "south":
      this.setBearing("east")
      break;
      case "west":
      this.setBearing("south")
    }
  }

  advance() {
    switch (this.bearing) {
      case "north":
      // console.log(this.coordinates[1])
      this.coordinates[1] += 1;
      // console.log(this.coordinates)
      break;
      case "east":
      this.coordinates[0] += 1
      break;
      case "south":
      console.log(this.coordinates[1])
      this.coordinates[1] -= 1;
      // console.log(this.coordinates)
      break;
      case "west":
      this.coordinates[0] -= 1
      default:
       break;
    }
  }

  translateInstructions(instructions) {
    console.log(instructions);
    instructions.split('').forEach(instruction => {
      switch (instruction){
      case 'L':
      this.turnLeft()
      break;
      case 'R':
      this.turnRight()
      break;
      case 'A':
      this.advance()
      break;
    }
  })
}


}











//end class
