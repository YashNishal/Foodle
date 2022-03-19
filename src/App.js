import "./App.scss";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar.js";
import Keyboard from "./components/Keyboard";
import WORDLIST from "./Constants/WordList"
import FOODLIST from "./Constants/FoodWordList"

import { React, useEffect, useState } from "react";

function App() {
    const [answer,setAnswer] = useState("");
    const [curRow, setCurRow] = useState(0);
    const [curCol, setCurCol] = useState(0);
    const [gameOver,setGameOver] = useState(false);
    const [input, setInput] = useState("");
    const [data, setData] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ]);

    
    useEffect( ()=>{
        var item = FOODLIST[Math.floor(Math.random()*FOODLIST.length)];
        setAnswer(item);
    },[]);


    const onEnter = () => {
        console.log('Enter')
        let word = "";
        data[curRow].forEach( (letter) => {
            word += letter;
        });

        if(word.length == 5) {

        }

        
    };

    const onDelete = () => {
        console.log('delete')
        if(curCol > 0 && !gameOver) {
            console.log("in")
            setData( (prev) => {
                const data = prev;
                data[curRow][curCol-1] = "";
                return data;
            })
            setCurCol(curCol-1);
        }
    };

    const onChar = (value) => {
        console.log("char : "+value);
        // console.log(curCol+" " +gameOver);
        if(curCol < 5 && !gameOver) {
            console.log("in")
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
            <Grid data={data} />
            <Keyboard onEnter={onEnter} onDelete={onDelete} onChar={onChar} />
        </div>
    );
}

export default App;
