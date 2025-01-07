 export default function Square({isRed, letter, number}) {

    const lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h"]

    function isPawnMoveValid(event, piece, side, lastHouse, actHouse){

        if(piece != "pawn") return true


        const x = lettersArray.indexOf(lastHouse[0]) - lettersArray.indexOf(actHouse[0])
        const y = lastHouse[1] - actHouse[1] 

        if(event.target.nodeName != "IMG" && lastHouse[0] != actHouse[0]) return false

        if(event.target.nodeName == "IMG" && 
            ( Math.abs(x) != Math.abs(y) || Math.abs(x) != 1)) return false


        if(side == "white") {

            if( (lastHouse[1] != 2 && actHouse[1] > Number(lastHouse[1])+1 )
                || (lastHouse[1] == 2 && actHouse[1] > Number(lastHouse[1])+2)
            ) return false

            if(lastHouse[1] > actHouse[1]) return false

        }

        return true

    }

    function capturePiece(event, id){
        const opSide = event.dataTransfer.getData('side') == "white" ? "black" : "white"
        if(!event.target.className.split(' ').some(function(w){return w === opSide})) return
        
        const house = event.target.parentElement
        const pieces = document.getElementsByClassName(event.target.className)

        pieces.item(0).remove()
        pieces.item(0).remove()

        putPieceInHouse(house, id)

    }

    function isHouseValid(event){

        if(event.target.nodeName == "IMG"){
            const letter = event.target.parentElement.className[event.target.parentElement.className.length-2]
            const number = event.target.parentElement.className[event.target.parentElement.className.length-1]
        }else {
            const letter = event.target.className[event.target.className.length-2]
            const number = event.target.className[event.target.className.length-1]    
        }
        const side = event.dataTransfer.getData('side')
        const piece = event.dataTransfer.getData('piece')

        const lastHouse = event.dataTransfer.getData('house')
        const actHouse = letter+number
        console.log(isPawnMoveValid(event, piece, side, lastHouse, actHouse))
        if(!isPawnMoveValid(event, piece, side, lastHouse, actHouse)) return false
        
        return true
    }

    function isMoveValid(event){
        if(!isHouseValid(event)) return false
        return true
    }

    function putPieceInHouse(piece, id){
        const pieces = document.getElementsByClassName(id)

        const squares = document.getElementsByClassName(piece.className)

        squares.item(0).appendChild(pieces.item(0))
        squares.item(1).appendChild(pieces.item(1))
    }

    function handleDrop(event){
        if(!isMoveValid(event)) return
        
        event.preventDefault()

        const id = event.dataTransfer.getData('id')
        
        if(event.target.nodeName == "IMG"){
            capturePiece(event, id)
            return
        }
        putPieceInHouse(event.target, id)

    }

    function handleDragOver(event){
        event.preventDefault()
    }

    if(isRed) return <div className={`square-red piece-house ${letter}${number}`}
    onDragOver={handleDragOver}
    onDrop={handleDrop}></div>

    return <div className={`square-white piece-house ${letter}${number}`}
    onDragOver={handleDragOver}
    onDrop={handleDrop}></div>
}