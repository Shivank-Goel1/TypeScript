interface PersonProps  {
    name : {
        first: string
        last: string
    }
}

export const Person = (props : PersonProps) => {
    return(
        <div>
            <h3>{props.name.first} {props.name.last}</h3>
        </div>
    )
}
