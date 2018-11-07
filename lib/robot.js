const directions =['north','east','south','west']

class Robot {

  constructor(bearing = directions[0],coordinates = [0,0]){
    this.bearing = bearing;
    this.coordinates = coordinates
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
  }

  setBearing(bearing){

    if(directions.includes(bearing))
      this.bearing = bearing;
    else
      throw "Invalid Robot Bearing";
  }

  place(placeVar){
    this.bearing = placeVar['direction']
    this.coordinates = [placeVar['x'], placeVar['y']]
  }

  turnRight(){
    if(directions.indexOf(this.bearing) < directions.length - 1){
      this.bearing = directions[directions.indexOf(this.bearing) + 1]
    }
    else {
      this.bearing = directions[0]
    }
  }

  turnLeft(){

    if(directions.indexOf(this.bearing) > 0){
      this.bearing = directions[directions.indexOf(this.bearing) - 1]
    }
    else {
      this.bearing = directions[3]
    }
  }

  advance(){
    switch(directions.indexOf(this.bearing)){
      case 0:
        this.coordinates = [this.coordinates[0],this.coordinates[1]+ 1]
        break;
      case 1:
        this.coordinates = [this.coordinates[0]+ 1,this.coordinates[1]]
        break;
      case 2:
        this.coordinates = [this.coordinates[0],this.coordinates[1] - 1]
        break;
      case 3:
        this.coordinates = [this.coordinates[0] - 1,this.coordinates[1]]
        break
    }
  }

  translateInstructions(string){

    for(const index in string){
      switch(string[index]){
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'A':
          this.advance();
          break;
      }
    }
  }
}
