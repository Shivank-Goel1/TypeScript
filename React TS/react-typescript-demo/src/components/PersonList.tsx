interface PersonListProps  {
    names: {
        first : string,
        last : string
    }[]//Array of objects
}

export const PersonList = (props : PersonListProps) =>{
    let i = 1;
    return(
        <div>
            <h1>List of names</h1>
            {
                props.names.map((name)=>{
                    return(
                        <>
                        <h2 key={name.first}>
                            {i++}. {name.first} {name.last}
                        </h2>
                        </>
                    )
                })
            }
        </div>
    )
}