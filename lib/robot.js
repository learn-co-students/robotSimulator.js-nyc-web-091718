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
      this.setCoordinates(0,1)
      break;
      case "east":
      this.setCoordinates(1,0)
      break;
      case "south":
      this.setCoordinates(0,-1)
      break;
      case "west":
      this.setCoordinates(-1,0)
      default:
       break;
    }



  }


}








//end class
