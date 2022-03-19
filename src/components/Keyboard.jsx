import {React,useEffect} from "react";
import "../App.scss"
import Key from "./Key"

export default function Keyboard({
    onChar,
    onDelete,
    onEnter,
}) {
    
    const onClick = (value) => {
        if (value === "ENTER") {
            onEnter();
        } else if (value === "DELETE") {
            onDelete();
        } else {
            onChar(value);
        }
    };

    useEffect(() => {
        const listener = (e) => {
            if (e.code === "Enter") {
                onEnter();
            } else if (e.code === "Backspace") {
                onDelete();
            } else {
                // const key = localeAwareUpperCase(e.key)
                const key = e.key.toLocaleUpperCase("en-US");
                if (key.length === 1 && key >= "A" && key <= "Z") {
                    onChar(key);
                }
            }
        };
        window.addEventListener("keyup", listener);
        
        // cleanup
        return () => {
            window.removeEventListener("keyup", listener);
        };
    }, [onEnter, onDelete, onChar]);

    return (
        <div className="keyboard">
            <div className="keyboard-row row-1">
                {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map(
                    (key) => (
                        <Key
                            value={key}
                            key={key}
                            onClick={onClick}
                        />
                    )
                )}
            </div>
            <div className="keyboard-row row-2">
                {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
                    <Key
                        value={key}
                        key={key}
                        onClick={onClick}
                    />
                ))}
            </div>
            <div className="keyboard-row row-3">
                <Key width={110} value="ENTER" onClick={onClick}>
                    ENTER
                </Key>
                {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
                    <Key
                        value={key}
                        key={key}
                        onClick={onClick}
                    />
                ))}
                <Key width={120} value="DELETE" onClick={onClick}>
                    DELETE
                </Key>
            </div>
        </div>
    );
}
