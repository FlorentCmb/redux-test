// Librairies
import React from 'react'
// Style
import './Button.css'

const Button = ({ color, text, click }) => {
    return (
        <button className={`Button Button-${color}`} onClick={() => click()}>
            {text}
        </button>
    )
}

export default Button