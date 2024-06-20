interface StatusProps {
    status : 'loading' | 'success' | 'error',
}

export const Status = (props:StatusProps) => {
    let message : string;
    if(props.status === 'loading'){
        message = 'loading...'
    }
    else if(props.status === 'success'){
        message = 'success!'
    }
    else{
        message = 'Error fetching data'
    };
    return(
        <div>
            <h3>Status - {message}</h3>
        </div>
    )
}