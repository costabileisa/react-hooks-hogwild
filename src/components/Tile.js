import React, { useState } from "react";
import ExtraInfo from "./ExtraInfo"
function Tile({ hog }) {
    const { name, image, description } = hog;

    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(val => !val)
    }

    return (
        <div id={name} onClick={handleClick} className="pigTile">
            <h3>{name}</h3>
            <img 
            src={image} 
            alt={description} 
            />
            {isClicked ? 
            <ExtraInfo 
            hog={hog}
            /> 
            : null}
        </div>
    )
};

export default Tile;