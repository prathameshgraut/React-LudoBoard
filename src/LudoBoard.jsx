import { useState } from "react"

export default function LudoBoard(){
    let[moves , setMoves]=useState({blue : 0,yellow : 0, green : 0, red : 0});

    let updateBlue=()=>{
        moves.blue +=1;
        console.log('moves.blue = ${moves.blue}');
        setMoves({...moves});
    }
        let updateYellow=()=>{
        moves.yellow +=1;
        console.log('moves.yellow = ${moves.yellow}');
        setMoves({...moves});
    }
        let updateGreen=()=>{
        moves.green +=1;
        console.log('moves.green = ${moves.green}');
        setMoves({...moves});
    }
        let updateRed=()=>{
        moves.red +=1;
        console.log('moves.red = ${moves.red}');
        setMoves({...moves});
    }
    return(
        <>
            <p>Game Begins !</p>
            <div className="Board">
                <p>Blues Moves ={moves.blue}</p>
                <button style={{ backgroundColor:"blue", color:"white"}} onClick={updateBlue}>1+</button>

                <p>Yellow Moves ={moves.yellow}</p>
                <button style={{ backgroundColor:"yellow", color:"black"} }onClick={updateYellow}>1+</button>

                <p>Green Moves ={moves.green}</p>
                <button style={{ backgroundColor:"green",color:"white"}} onClick={updateGreen}>1+</button>

                <p>Red Moves ={moves.red}</p>
                <button style={{ backgroundColor:"red",color:"white"}} onClick={updateRed}>1+</button>
            </div>
        </>
    )
}