import Pieces from "./Pieces";

export default function DefaultPieces(){

    
    return (<div>
        {/* pawns */}
        <Pieces side="white" piece="pawn" house="a2"/>
        <Pieces side="white" piece="pawn" house="b2"/>
        <Pieces side="white" piece="pawn" house="c2"/>
        <Pieces side="white" piece="pawn" house="d2"/>
        <Pieces side="white" piece="pawn" house="e2"/>
        <Pieces side="white" piece="pawn" house="f2"/>
        <Pieces side="white" piece="pawn" house="g2"/>
        <Pieces side="white" piece="pawn" house="h2"/>

        <Pieces side="black" piece="pawn" house="a7"/>
        <Pieces side="black" piece="pawn" house="b7"/>
        <Pieces side="black" piece="pawn" house="c7"/>
        <Pieces side="black" piece="pawn" house="d7"/>
        <Pieces side="black" piece="pawn" house="e7"/>
        <Pieces side="black" piece="pawn" house="f7"/>
        <Pieces side="black" piece="pawn" house="g7"/>
        <Pieces side="black" piece="pawn" house="h7"/>

        {/*  */}

        <Pieces side="black" piece="rook" house="h8"/>
        <Pieces side="black" piece="rook" house="a8"/>

        <Pieces side="black" piece="knight" house="g8"/>
        <Pieces side="black" piece="knight" house="b8"/>

        <Pieces side="black" piece="bishop" house="f8"/>
        <Pieces side="black" piece="bishop" house="c8"/>

        <Pieces side="black" piece="queen" house="d8"/>
        <Pieces side="black" piece="king" house="e8"/>

        {/*  */}

        <Pieces side="white" piece="rook" house="h1"/>
        <Pieces side="white" piece="rook" house="a1"/>

        <Pieces side="white" piece="knight" house="g1"/>
        <Pieces side="white" piece="knight" house="b1"/>

        <Pieces side="white" piece="bishop" house="f1"/>
        <Pieces side="white" piece="bishop" house="c1"/>

        <Pieces side="white" piece="queen" house="d1"/>
        <Pieces side="white" piece="king" house="e1"/>
    </div>)

}