console.log('To move rover input the function move with l, f, or r as its parameters.')

let rover = {
  direction: 'N',
  X: 0,
  Y: 0,
  travelLog: [],
};



function turnLeft(rover){
  console.log("turnLeft was called!");

  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
  console.log('Current direction is: ' + rover.direction)
}

function turnRight(rover){
  console.log("turnRight was called!");

  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'S';
      break;
  }
  console.log('Current direction is: ' + rover.direction)
}

function moveForward(rover){
  console.log("moveForward was called")

  switch(rover.direction) {
    case 'N':
      rover.Y --;
      break;
    case 'E':
      rover.X ++;
      break;
    case 'S':
      rover.Y ++;
      break;
    case 'W':
      rover.X --;
      break;
  }

  borders(rover.X, rover.Y);

  let position = [rover.X, rover.Y];
  console.log('Current position: ' + position);
  rover.travelLog.push(position);
  console.log(rover.travelLog);
}

function move (commands) {
  commands = commands.split('');

  commands.forEach(command => {
    if(command === 'f') {
      moveForward(rover);
    }
    else if(command === 'l') {
      turnLeft(rover);
    }
    else if(command === 'r') {
      turnRight(rover);
    }
    else {
      console.log(command + ' is not a command, please enter l, r, or f.');
    }
  });
}

function borders(positionx, positiony) {
  if(positionx < 0) {
    console.log('Border reached!');
    rover.X = 0;
  }
  if(positiony < 0) {
    console.log('Border reached!');
    rover.Y = 0;
  }
}
