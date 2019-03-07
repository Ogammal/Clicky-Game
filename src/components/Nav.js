import React from "react"
// import Score from "./score.js"

function Nav(props) {
    return(
        <nav className = "navbar">
            
            <span className = "brand">
                <a href="*">Clicky Game</a>
            </span>
            <span className= "message">
                {props.message}
            </span>
            <span>
                Score: {props.correct} | Top Score: {props.topscore} 

            </span>

            
        </nav>
    )
}

export default Nav