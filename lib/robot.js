class Robot {
	//your solution here
  constructor(coordinates = [0,0], bearing = 'north') {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x, y) {
    this.coordinates = [x,y]
  }

  setBearing(bearing) {
    const directions = ["north", "south", "east", "west"];
    if (directions.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(coordinatesDirection) {
    this.setBearing(coordinatesDirection.direction)
    this.setCoordinates(coordinatesDirection.x,coordinatesDirection.y)
  }

  turnRight(){
    const directions = ["north", "east","south", "west"];
    if(this.bearing === "west") {
      this.setBearing("north")
    } else {
      let directionIndex = directions.indexOf(this.bearing)
      let newIndex = directionIndex + 1
      this.setBearing(directions[newIndex])
    }
  }
  turnLeft(){
    const directions = ["north", "west","south", "east"];
    if(this.bearing === "east") {
      this.setBearing("north")
    } else {
      let directionIndex = directions.indexOf(this.bearing)
      let newIndex = directionIndex + 1
      this.setBearing(directions[newIndex])
    }
  }
  advance() {
    let x = this.coordinates[0];
    let y = this.coordinates[1];
    let direction = this.bearing;
    if (direction === "north") {
      y++;
    } else if (direction === "south") {
      y--;
    } else if (direction === "east") {
      x++;
    } else if (direction === "west") {
      x--;
    }
    this.setCoordinates(x, y);
  }
  translateInstructions(instructions) {
    // Go over each letter in instruction
    for (let instruction of instructions) {
      // For each character in instructions
      // do one of the following, depending on what it is.
      if (instruction === 'L') {
        this.turnLeft()
      } else if (instruction === 'R') {
        this.turnRight()
      } else if (instruction === 'A'){
        this.advance()
      }

    }
  }

}
