import { initializeAuth, onAuthStateChanged } from 'firebase/auth';
import {auth} from '../../Firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
 
import { Children, useEffect, useState } from "react";

const AuthContext = React.createContext();
export function AuthProvider({children}){
    const[currentUser,setCurrentUser] = useState();
    const [userLoggedIn, setUserLoggedIn] =useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])
    
    async function initializeUser(user){
        if (user) {
            setCurrentUser({...user});
            setUserLoggedIn(true);
        }else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }
    
    return(
        <AuthContext.Provider value={value}>
            {!loading && Children}
        </AuthContext.Provider>
    )
}