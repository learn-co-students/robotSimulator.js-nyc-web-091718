class Robot {
	//your solution here
  constructor(){
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }

  setCoordinates(num1, num2){
    this.coordinates = [num1, num2];
  }

  setBearing(direction){
    let acceptedBearings = ["north", "south", "east", "west"];
    if (acceptedBearings.includes(direction)) {
      this.bearing = direction;
    } else {
      throw 'Invalid Robot Bearing';
    }
  }

  place(obj){
    this.setCoordinates(obj.x, obj.y);
    this.setBearing(obj.direction);
  }

  turnRight(){
    switch (this.bearing) {
      case 'north': this.setBearing('east'); break;
      case 'east': this.setBearing('south'); break;
      case 'south': this.setBearing('west'); break;
      case 'west': this.setBearing('north'); break;
    }
  }

  turnLeft(){
    switch (this.bearing) {
      case 'north': this.setBearing('west'); break;
      case 'east': this.setBearing('north'); break;
      case 'south': this.setBearing('east'); break;
      case 'west': this.setBearing('south'); break;
    }
  }

  advance(){
    switch (this.bearing) {
      case 'north': this.setCoordinates(this.coordinates[0], this.coordinates[1]+1); break;
      case 'east': this.setCoordinates(this.coordinates[0]+1, this.coordinates[1]); break;
      case 'south': this.setCoordinates(this.coordinates[0], this.coordinates[1]-1); break;
      case 'west': this.setCoordinates(this.coordinates[0]-1, this.coordinates[1]); break;
    }
  }

  translateInstructions(string){
    for (let c of string) {
      switch (c) {
        case 'L': this.turnLeft(); break;
        case 'R': this.turnRight(); break;
        case 'A': this.advance(); break;
      }
    }
  }

} // end Robot class
