import React from "react"

function Img(props) {
    return (
        <img 
            src={props.src} 
            alt={props.name} 
            className="img-thumbnail clickable-images" 
            onClick={() => props.pickImg(props.name)} 
        />
    )
}

export default Img