import "./App.scss";

import Grid from "./components/Grid";
import Navbar from "./components/Navbar.jsx";
import Keyboard from "./components/Keyboard";
import GameWin from "./components/GameWin";
import GameOver from "./components/GameOver";
import HowToPlay from "./components/HowToPlay";

import {WORDLIST} from "./Constants/WordList"
import {FOODLIST} from "./Constants/FoodWordList"

import { React, useEffect, useState } from "react";

function App() {

    const [showHowToPlay,setShowHowToPlay] = useState(false);
    const [answer,setAnswer] = useState("");
    const [curRow, setCurRow] = useState(0);
    const [curCol, setCurCol] = useState(0);
    const [gameOver,setGameOver] = useState(false);
    const [victory,setVictory] = useState(false);
    
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

    const [keyMapping,setkeyMapping] = useState({});
    
  

    useEffect( ()=>{
        var item = FOODLIST[Math.floor(Math.random()*FOODLIST.length)];
        setAnswer(item.toUpperCase());
    },[]);

    const restart = () => {
        setData([
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
        ]);
        setColor([
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
        ]);

        
        var item = FOODLIST[Math.floor(Math.random()*FOODLIST.length)];
        setAnswer(item.toUpperCase());

        setCurRow(0);
        setCurCol(0);
        setGameOver(false);
        setVictory(false);
        setkeyMapping({});
    }


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
            const keyMap = keyMapping;

            for(let i = 0 ; i < 5 ; i++) {
                if(answer[i] === word[i] ) {
                    color[curRow][i] = "Green";
                    keyMap[answer[i]] = "Green";
                    // keyMap.set(answer[i],"Green");
                }
                else if(answer.match(word[i]) !== null) {
                    color[curRow][i] = "Yellow";
                    if(keyMap[word[i]] !== "Green") {
                        keyMap[word[i]] = "Yellow"
                        // keyMap.set(word[i],"Yellow")
                    }
                }
                else {
                    color[curRow][i] = "Grey";
                    if(keyMap[word[i]] !== "Green" && keyMap[word[i]] !== "Yellow") {
                        keyMap[word[i]] = "Grey"
                        // keyMap.set(word[i],"Grey")
                    }
                }
            }
            setkeyMapping(keyMap);
            console.log(color);
            console.log(keyMap);
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
            <Navbar hptOnClick={ () => {setShowHowToPlay(!showHowToPlay)} }/>
            <Grid data={data} color={color}/>
            <Keyboard onEnter={onEnter} onDelete={onDelete} onChar={onChar} keyMapping={keyMapping}/>
            <GameWin victory={victory} restart={restart}/>
            <GameOver over={gameOver} restart={restart}/>
            <HowToPlay onClick={ () => {setShowHowToPlay(!showHowToPlay)} } show={showHowToPlay} />
        </div>
    );
}

export default App;
