interface headprops{
    children : string,
}

export const Heading = (props: headprops) =>{
    return(
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}