class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north';
    this.directions = ['north', 'south', 'east', 'west']
  } //end of constructor

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(direction) {
    if (this.directions.includes(direction)) {
      this.bearing = direction;
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  place(coordinateAndOrientation) {
    this.setCoordinates(coordinateAndOrientation.x, coordinateAndOrientation.y)
    this.setBearing(coordinateAndOrientation.direction)
  }

  turnRight() {
    switch (this.bearing) {
      case 'north':
        this.setBearing('east');
        break;
      case 'east':
        this.setBearing('south');
        break;
      case 'south':
        this.setBearing('west');
        break;
      case 'west':
        this.setBearing('north');
        break;
        default:
        break;
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case 'north':
        this.setBearing('west');
        break;
      case 'east':
        this.setBearing('north');
        break;
      case 'south':
        this.setBearing('east');
        break;
      case 'west':
        this.setBearing('south');
        break;
      default:
        break;
    }
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1;
        break;
      case 'east':
        this.coordinates[0] += 1;
        break;
      case 'south':
        this.coordinates[1] -= 1;
        break;
      case 'west':
        this.coordinates[0] -= 1;
        break;
      default:
        break;
    }
  }

  translateInstructions(instructions) {
    instructions.split('').forEach(instruction => {
      switch (instruction) {
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break;
        case "A":
          this.advance();
          break;
        default:
          break;
      }
    })
  }

} //end of class
