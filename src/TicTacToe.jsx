import { useState } from "react"
import './tictactoe.css'

import Box from "./Box"
import Confetti from 'react-confetti'
import { useEffect } from "react"
function TicTacToe() {
    
    const [boxes , setBoxes] = useState(Array(9).fill(""))
    const [currentPlayer , setCurrentplayer] = useState("X")
    const [winner , setWinner] = useState('')
    const [draw , setDraw] = useState(false)
    
    useEffect(() => {
        const winnerpos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i = 0; i<winnerpos.length; i++)
        {
            if(boxes[winnerpos[i][0]] !== '' && 
               boxes[winnerpos[i][0]] === boxes[winnerpos[i][1]] && 
               boxes[winnerpos[i][1]] === boxes[winnerpos[i][2]])
            {
               setWinner(boxes[winnerpos[i][0]]);
            }
            
        }
          const emptyboxcnt =  boxes.filter((box) => box === '').length
          if(emptyboxcnt === 0)
          {
            setDraw(true)
          }
    }, [boxes])
    
    const updateBox = (boxnum) => {
        
        if(boxes[boxnum] !== "" || winner !== '')
            {
                return;
            }
                            
       const newBoxes = [...boxes]
       newBoxes[boxnum] = currentPlayer;
       setBoxes(newBoxes)
       
       setCurrentplayer(currentPlayer === "X" ? "O" : "X")

    }

    const restartgame = () => {
        setBoxes(Array(9).fill(""));
        setWinner("");
        setDraw(false)
        setCurrentplayer("X")
    }
    return (
        
            <div className="container">
                <h1 style={{color: "white"}}>TIC TAC TOE</h1>
                {winner !== "" && <Confetti/>}
               {winner !== "" && <h1 style={{color: "white"}}>Winner is: {winner}  </h1> }
               {winner === '' && draw && <h1>Match is Draw</h1> }

             <div className="boxes">
                {boxes.map((box, idx) => (
                    <Box value={box} boxNum={idx} updateBox={updateBox}></Box>
            ))}
             </div>
             <button className='btnrst' onClick={restartgame}>Restart</button>
          </div>
    
    )
}

export default TicTacToe
