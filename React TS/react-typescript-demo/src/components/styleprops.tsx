interface StyleProps{
    styles : React.CSSProperties,
}

export const Style = (props : StyleProps) => {
    return(
        <div style={props.styles}>
        </div>
    )
}