interface GreetProps  {
    name : string
    messageCount ?: number //Making message count optional
    isLoggedIn : boolean
}

export const Greet = (props : GreetProps) => {
    const { messageCount = 0 } = props //Making messageCount have a default value just in case
    return(
        <div>
            { props.isLoggedIn ?
            <h2>Welcome {props.name}! You have {messageCount} unread messages</h2> :
            <h2>Welcome Guest!</h2>
            }
        </div>
    );
}