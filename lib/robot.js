class Robot {
	//your solution here
  constructor(coordinates = [0,0],bearing = "north"){
    this.coordinates = coordinates
    this.bearing = bearing
  }
  setCoordinates(x,y){
    this.coordinates = [x,y]
  }
  setBearing(bearing){
    if (bearing === "north" || bearing === "east" || bearing==="south" || bearing==="west"){
      this.bearing = bearing
    }
    else{
      throw "Invalid Robot Bearing";
    }
  }
  place(attributes){
    this.setCoordinates(attributes.x,attributes.y)
    this.setBearing(attributes.direction)
  }
  turnRight(){
    switch (this.bearing) {
      case "north":this.bearing = "east"; break
      case "east":this.bearing = "south";break
      case "south":this.bearing = "west";break
      case "west":;this.bearing = "north";break
    }
  }
  turnLeft(){
    switch (this.bearing) {
      case "north":this.bearing = "west";break
      case "east":this.bearing = "north";break
      case "south":this.bearing = "east";break
      case "west":this.bearing = "south";break
    }
  }
  advance(){
    switch (this.bearing) {
      case "north":this.coordinates[1]++;break
      case "east":this.coordinates[0]++;break
      case "south":this.coordinates[1]--;break
      case "west":this.coordinates[0]--;break
    }
  }
  translateInstructions(instructions){
    let instructionsArr = instructions.split('')
    instructionsArr.forEach((instr)=>{
      if (instr === "L"){
        this.turnLeft()
      }else if(instr === "R"){
        this.turnRight()
      }else if(instr === "A"){
        this.advance()
      }
    })
  }
}
