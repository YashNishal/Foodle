import "./App.scss";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar.js";
import Keyboard from "./components/Keyboard";
import {WORDLIST} from "./Constants/WordList"
import {FOODLIST} from "./Constants/FoodWordList"

import { React, useEffect, useState } from "react";

function App() {
    const [answer,setAnswer] = useState("");
    const [curRow, setCurRow] = useState(0);
    const [curCol, setCurCol] = useState(0);
    const [gameOver,setGameOver] = useState(false);
    const [victory,setVictory] = useState(false);
    const [input, setInput] = useState("");
    const [data, setData] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
    ]);
    const [color, setColor] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ])

    
    useEffect( ()=>{
        var item = FOODLIST[Math.floor(Math.random()*FOODLIST.length)];
        setAnswer(item.toUpperCase());
    },[]);


    const onEnter = () => {
        console.log('Enter')
        let word = "";
        data[curRow].forEach( (letter) => {
            word += letter;
        });

        if(word.length !== 5 ) return; 

        const idx = WORDLIST.indexOf(word.toLowerCase());
        if(idx === -1) return;
        console.log("Answer word is : " + answer);
        setColor( (prevColor) => {
            const color = prevColor;
        
            for(let i = 0 ; i < 5 ; i++) {
                if(answer[i] === word[i] ) {
                    color[curRow][i] = "Green";
                }
                else if(answer.match(word[i]) !== null) {
                    color[curRow][i] = "Yellow";
                }
                else {
                    color[curRow][i] = "Grey";
                }
            }
            console.log(color);
            return color;
        });

        if(answer === word) {
            setVictory(true);
            return;
        }
        if(curRow === 5) {
            setGameOver(true);
            return;
        }
        setCurRow(curRow+1);
        setCurCol(0);
    };


    const onDelete = () => {
        // console.log('delete')
        if(curCol > 0 && !gameOver && !victory) {
            setData( (prev) => {
                const data = prev;
                data[curRow][curCol-1] = "";
                return data;
            })
            setCurCol(curCol-1);
        }
    };


    const onChar = (value) => {
        // console.log("char : "+value);
        // console.log(curCol+" " +gameOver);
        if(curCol < 5 && !gameOver && !victory) {
            // console.log("in")
            setData( (prev) => {
                const data = prev;
                data[curRow][curCol] = value;
                return data;
            })
            setCurCol(curCol+1);
        }
    };

    return (
        <div className="App">
            <Navbar />
            <Grid data={data} color={color}/>
            <Keyboard onEnter={onEnter} onDelete={onDelete} onChar={onChar} />
        </div>
    );
}

export default App;
