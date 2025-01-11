const lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function isPawnMoveValid(event, piece, side, lastHouse, actHouse) {
  if (piece != "pawn") return true;

  const x = lettersArray.indexOf(lastHouse[0]) - lettersArray.indexOf(actHouse[0]);
  const y = lastHouse[1] - actHouse[1];

  if (event.target.nodeName != "IMG" && lastHouse[0] != actHouse[0])
    return false;

  if (
    event.target.nodeName == "IMG" &&
    (Math.abs(x) != Math.abs(y) || Math.abs(x) != 1)
  )
    return false;

  if (side == "white") {
    if (
      (lastHouse[1] != 2 && actHouse[1] > Number(lastHouse[1]) + 1) ||
      (lastHouse[1] == 2 && actHouse[1] > Number(lastHouse[1]) + 2)
    )
      return false;

    console.log(document.getElementsByClassName(actHouse[0]+Number(actHouse[1]-1))[0].hasChildNodes())
    if(lastHouse[1] == 2 && actHouse[1] == Number(lastHouse[1])+2 && document.getElementsByClassName(actHouse[0]+Number(actHouse[1]-1))[0].hasChildNodes()) return false

    if (lastHouse[1] > actHouse[1]) return false;

  } else if (side == "black") {
    if (
      (lastHouse[1] != 7 && actHouse[1] < Number(lastHouse[1]) - 1) ||
      (lastHouse[1] == 7 && actHouse[1] < Number(lastHouse[1]) - 2)
    )
      return false;

    if (lastHouse[1] < actHouse[1]) return false;
  }

  return true;
}

export function isKnightMoveValid(event, piece, side, lastHouse, actHouse) {
  if (piece != "knight") return true;

  const x =
    lettersArray.indexOf(lastHouse[0]) - lettersArray.indexOf(actHouse[0]);
  const y = lastHouse[1] - actHouse[1];

  const possibleMoves = [[2, -1], [2, 1], [-2, -1], [-2, 1],
                          [1, 2], [1, -2], [-1, 2], [-1, -2],
  ];

  for (let i = 0; i < possibleMoves.length; i++) {
    if (possibleMoves[i][0] == Number(x) && possibleMoves[i][1] == Number(y))
      return true;
  }

  return false;
}

export function isBishopMoveValid(event, piece, side, lastHouse, actHouse) {

  if(piece != "bishop") return true
  
  const x = lettersArray.indexOf(lastHouse[0]) - lettersArray.indexOf(actHouse[0]);
  const y = lastHouse[1] - actHouse[1];

  if (Math.abs(x) != Math.abs(y)) return false;

  console.log(x + " " + y)

  const xDir = x > 0 ? "left" : "right"
  const yDir = y > 0 ? "down" : "up"

  function setIndex(){
    if(x > 0) return indexX--

    return indexX++
  }

  var indexX = lettersArray.indexOf(lastHouse[0])
  if( y > 0 ){ // to left
    for(let i = Number(lastHouse[1]); i > Number(actHouse[1]); i--){
      setIndex()
      const house = document.getElementsByClassName(lettersArray[indexX]+(i-1))[1]
      if(indexX == lettersArray.indexOf(actHouse[0])) return true
      if(house.hasChildNodes()) return false
    }
  }else{ // to right
    for(let i = Number(lastHouse[1]); i < Number(actHouse[1]); i++){
      setIndex()
      const house = document.getElementsByClassName(lettersArray[indexX]+(i+1))[1]
      if(indexX == lettersArray.indexOf(actHouse[0])) return true
      if(house.hasChildNodes()) return false
    }
  }

  return true;
}

export function putPieceInHouse(piece, id) {
  const pieces = document.getElementsByClassName(id);

  const squares = document.getElementsByClassName(piece.className);

  squares.item(0).appendChild(pieces.item(0));
  squares.item(1).appendChild(pieces.item(1));
}

export function capturePiece(event, id) {
  const opSide =
    event.dataTransfer.getData("side") == "white" ? "black" : "white";
  if (
    !event.target.className.split(" ").some(function (w) {
      return w === opSide;
    })
  )
    return;

  const house = event.target.parentElement;
  const pieces = document.getElementsByClassName(event.target.className);

  pieces.item(0).remove();
  pieces.item(0).remove();

  putPieceInHouse(house, id);
}