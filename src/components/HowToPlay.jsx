import React from "react";
import Box from "./Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function HowToPlay({ onClick, show }) {
    console.log(show);
    return show ? (
        <div className="modal-bg-htp">
            <div className="tutorial">
                <div className="htp-heading">
                    HOW TO PLAY
                    <FontAwesomeIcon
                        className="cross"
                        icon={faXmark}
                        onClick={onClick}
                    >
                        Close
                    </FontAwesomeIcon>
                </div>

                <p>Guess the Food Word in six tries.</p>
                <p>
                    Each guess must be a valid five-letter word. Hit the enter
                    button to submit.
                </p>
                <p>
                    After each guess, the color of the tiles will change to show
                    how close your guess was to the word.
                </p>
                <div className="examples">
                    <h2>Examples</h2>
                    <br />
                    <div className="example">
                        {["S", "U", "S", "H", "I"].map((value) => {
                            return (
                                <Box
                                    className={`box ${
                                        value === "U" ? "Green" : ""
                                    }`}
                                    value={value}
                                    filled={value === "U" ? 0 : 1}
                                />
                            );
                        })}
                    </div>
                    <p>The letter U is in the word and in the correct spot.</p>
                    <br />
                    <div className="example">
                        {["C", "H", "I", "P", "S"].map((value) => {
                            return (
                                <Box
                                    className={`box ${
                                        value === "I" ? "Yellow" : ""
                                    }`}
                                    value={value}
                                    filled={value === "I" ? 0 : 1}
                                />
                            );
                        })}
                    </div>
                    <p>The letter I is in the word but in the wrong spot.</p>
                    <br />
                    <div className="example">
                        {["J", "E", "L", "L", "Y"].map((value) => {
                            return (
                                <Box
                                    className={`box ${
                                        value === "Y" ? "Grey" : ""
                                    }`}
                                    value={value}
                                    filled={value === "Y" ? 0 : 1}
                                />
                            );
                        })}
                    </div>
                    <p>The letter Y is not in the word in any spot.</p>
                    <br />

                    {/* <Box
                        key={i + " " + j}
                        className={`box ${bgColor}`}
                        filled={data[i][j] === "" ? 0 : 1}
                        value={data[i][j]}
                    /> */}
                </div>
            </div>
        </div>
    ) : null;
}
