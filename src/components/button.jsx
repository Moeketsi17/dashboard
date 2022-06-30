import React from 'react'

const button = ({bgColor, color, size, text, borderRadius}) => {
    return (
        <button
            type='button'
            style={{ backhroundColor: bgColor, color, borderRadius }}
            className={`text-${size} p-3 hover:drop-shadow-xl `}
        >
            {text}
        </button>
    )
}

export default button