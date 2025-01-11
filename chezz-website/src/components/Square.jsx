import * as ChessScripts from '../chess_script/PiecesValidation'

export default function Square({ isRed, letter, number }) {

  function isHouseValid(event) {
    if (event.target.nodeName == "IMG") {
      const letter =
        event.target.parentElement.className[
          event.target.parentElement.className.length - 2
        ];
      const number =
        event.target.parentElement.className[
          event.target.parentElement.className.length - 1
        ];
    } else {
      const letter = event.target.className[event.target.className.length - 2];
      const number = event.target.className[event.target.className.length - 1];
    }
    const side = event.dataTransfer.getData("side");
    const piece = event.dataTransfer.getData("piece");

    const lastHouse = event.dataTransfer.getData("house");
    const actHouse = letter + number;

    if (
      !ChessScripts.isPawnMoveValid(event, piece, side, lastHouse, actHouse) ||
      !ChessScripts.isKnightMoveValid(event, piece, side, lastHouse, actHouse) ||
      !ChessScripts.isBishopMoveValid(event, piece, side, lastHouse, actHouse)
    )
      return false;

    return true;
  }

  function isMoveValid(event) {
    if (!isHouseValid(event)) return false;
    return true;
  }

  function handleDrop(event) { // center func
    if (!isMoveValid(event)) return;

    event.preventDefault();

    const id = event.dataTransfer.getData("id");

    if (event.target.nodeName == "IMG") {
      ChessScripts.capturePiece(event, id);
      return;
    }
    ChessScripts.putPieceInHouse(event.target, id);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  if (isRed)
    return (
      <div
        className={`square-red piece-house ${letter}${number}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
    );

  return (
    <div
      className={`square-white piece-house ${letter}${number}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    ></div>
  );
}
