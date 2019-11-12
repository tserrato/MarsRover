var rover = {
  direction : "N",
  X : 0,
  Y : 0

};
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case 'N':
      rover.direction = "W";
      break;
    case 'E':
      rover.direction = "N";
      break;
    case 'S':
      rover.direction = "E";
      break;
    case 'W':
      rover.direction = "S";
      break;
    
    }  

  }


function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case 'N':
      rover.direction = "E";
      break;
    case 'E':
      rover.direction = "S";
      break;
    case 'S':
      rover.direction = "W";
      break;
    case 'W':
      rover.direction = "N";
      break;
    
    }
}

function moveForward(rover){
  console.log("moveForward was called");
  switch(rover.direction){
    case direction === "N":
      rover.Y = Y - 1;
      break;
    case direction === 'E':
      rover.X = X + 1;
      break;
    case direction === 'S':
      rover.Y = Y + 1;
      break;
    case direction === 'W':
      rover.X = X - 1;
      break;
    
    }
}

function move(command){
  switch(command){
    case f :
      moveForward();
      break;
    case r :
      turnRight();
      break;
    case l :
      turnLeft();    
  }
}
