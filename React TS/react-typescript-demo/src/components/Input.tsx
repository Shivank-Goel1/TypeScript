interface Inputprop{
    value : string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props : Inputprop) => {
    const {handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event);
    }} = props
    return <input type="text" value={props.value} onChange={handleChange}/>
}