import { useState } from "react";

interface AuthUser{
    name: string , 
    email: string , 
}

export const User = () => {
    // const [user , setUser] = useState(null); --- will cause error later in fututre if type other than null is assigned 
    const [user , setUser] = useState<AuthUser | null>(null);
    //OR
    // const [user, setUser] = useState<AuthUser>({} as AuthUser); --- in case, you are sure that user will never be null after initialization  (TYPE ASSERTION)
    const handleLogin = () => {
        setUser({
            name: 'Shivank' , //Hard code for now for understanding
            email: 'shivank@example.com' , 
        }
        )
    }
    const handleLogout = () => {
        setUser(null)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h3>User name is : {user ? user?.name : 'user logged out'}</h3>
            <h3>User Email is : {user ? user?.email : 'user logged out'}</h3>{/* ? is for checking in case if user is null (although in this case it is not needed because of ternary operator '?')*/}
        </div>
    );
}