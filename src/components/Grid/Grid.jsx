import React from "react";
import s from "./Grid.module.scss";
import GridRow from "./GridRow";

export default function Grid() {
    return (
        <div className={s.board}>
            <div className={s.Grid}>
                <GridRow />
                <GridRow />
                <GridRow />
                <GridRow />
                <GridRow />
                <GridRow />
            </div>
        </div>
    );
}
