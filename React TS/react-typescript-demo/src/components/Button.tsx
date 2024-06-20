import React from "react"

interface ButtonProps{
    handleClick: (text: string, event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props : ButtonProps) => {
    return(
        <>
        <button onClick={(event) => props.handleClick('Hello World', event, 1)}>Click</button>
        </>
    )
}