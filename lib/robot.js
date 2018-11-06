let directions = ["north", "east", "south", "west"]
class Robot {
  constructor () {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(c1, c2) {
    this.coordinates = [c1,c2]
  }

  setBearing(dir) {
    if (directions.includes(dir.toLowerCase())) {
      this.bearing = dir.toLowerCase()
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(attr) {
    this.setCoordinates(attr.x,attr.y)
    this.setBearing(attr.direction)
  }

  turnRight() {
    let newIndex = directions.findIndex(dir => dir == this.bearing) + 1
    newIndex = (newIndex > directions.length - 1) ? newIndex - directions.length : newIndex
    newIndex = (newIndex < 0) ? newIndex + directions.length : newIndex
    this.bearing = directions[newIndex]
  }

  turnLeft() {
    let newIndex = directions.findIndex(dir => dir == this.bearing) - 1
    newIndex = (newIndex > directions.length - 1) ? newIndex - directions.length : newIndex
    newIndex = (newIndex < 0) ? newIndex + directions.length : newIndex
    this.bearing = directions[newIndex]
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1]++
    } else if (this.bearing === "south") {
      this.coordinates[1]--
    } else if (this.bearing === "west") {
      this.coordinates[0]--
    } else if (this.bearing === "east") {
      this.coordinates[0]++
    }
  }

  translateInstructions(instructions) {
    let steps = instructions.split("")
    steps.forEach(step => {
      if (step.toUpperCase() === "L") {
        this.turnLeft()
      } else if (step.toUpperCase() === "R") {
        this.turnRight()
      } else if (step.toUpperCase() === "A") {
        this.advance()
      }
    })
  }
}
