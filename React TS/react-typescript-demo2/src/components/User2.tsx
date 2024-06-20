import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User2 = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        if(userContext){
            userContext.setUser(
                {
                    name : 'Shivank',
                    email : 'Shivank@amalaearth.com',
                }
            )
        }
    }
    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null);
        }
    }
    return(
        <>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h4>User Name is : {userContext?.user ? `${userContext.user.name}` : 'User Logged Out'}</h4>
        <h4>User Email is : {userContext?.user ? `${userContext.user.email}` : 'User Logged Out'}</h4>
        </>
    )
}