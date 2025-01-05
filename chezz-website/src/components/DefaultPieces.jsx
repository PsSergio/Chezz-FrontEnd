import Pieces from "./Pieces";

export default function DefaultPieces(){


    return (<div>
        {/* pawns */}
        <Pieces side="white" piece="pawn" house="a2" id={1}/>
        <Pieces side="white" piece="pawn" house="b2" id={2}/>
        <Pieces side="white" piece="pawn" house="c2" id={3}/>
        <Pieces side="white" piece="pawn" house="d2" id={4}/>
        <Pieces side="white" piece="pawn" house="e2" id={5}/>
        <Pieces side="white" piece="pawn" house="f2" id={6}/>
        <Pieces side="white" piece="pawn" house="g2" id={7}/>
        <Pieces side="white" piece="pawn" house="h2" id={8}/>

        <Pieces side="black" piece="pawn" house="a7" id={1}/>
        <Pieces side="black" piece="pawn" house="b7" id={2}/>
        <Pieces side="black" piece="pawn" house="c7" id={3}/>
        <Pieces side="black" piece="pawn" house="d7" id={4}/>
        <Pieces side="black" piece="pawn" house="e7" id={5}/>
        <Pieces side="black" piece="pawn" house="f7" id={6}/>
        <Pieces side="black" piece="pawn" house="g7" id={7}/>
        <Pieces side="black" piece="pawn" house="h7" id={8}/>

        {/*  */}

        <Pieces side="black" piece="rook" house="h8" id={2}/>
        <Pieces side="black" piece="rook" house="a8" id={1}/>

        <Pieces side="black" piece="knight" house="g8" id={2}/>
        <Pieces side="black" piece="knight" house="b8" id={1}/>

        <Pieces side="black" piece="bishop" house="f8" id={2}/>
        <Pieces side="black" piece="bishop" house="c8" id={1}/>

        <Pieces side="black" piece="queen" house="d8" id={1}/>
        <Pieces side="black" piece="king" house="e8" id={1}/>

        {/*  */}

        <Pieces side="white" piece="rook" house="h1" id={2}/>
        <Pieces side="white" piece="rook" house="a1" id={1}/>

        <Pieces side="white" piece="knight" house="g1" id={2}/>
        <Pieces side="white" piece="knight" house="b1" id={1}/>

        <Pieces side="white" piece="bishop" house="f1" id={2}/>
        <Pieces side="white" piece="bishop" house="c1" id={1}/>

        <Pieces side="white" piece="queen" house="d1" id={1}/>
        <Pieces side="white" piece="king" house="e1" id={1}/>
    </div>)

}