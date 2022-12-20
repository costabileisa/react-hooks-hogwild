import React from "react";
import Tile from "./Tile"

function HogTiles({ hogs }) {

    const getTiles = hogs.map(hog => {
        return (
            <Tile 
            key={hog.name}
            hog={hog}
            />
        )
    })
    return (
        <>
        {getTiles}
        </>
    )
}

export default HogTiles;