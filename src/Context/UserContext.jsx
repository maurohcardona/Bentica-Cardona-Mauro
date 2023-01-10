import React, { useState } from 'react';
import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Services/firebaseConfig'


export const UserContext = createContext();

    const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');
    const [currenState, setCurrentState] = useState(false);
    


    function handleUserStateChanged (user) {
        if(user) {
            setCurrentUser(user.displayName)
        } else {
            console.log('No hay nadie autenticado ...');
        }
    }

    async function handleOnClick(){
        const googleProvider = new GoogleAuthProvider()
        await signInWithGoogle(googleProvider)
        
        async function signInWithGoogle(googleProvider){
            try {
                 await signInWithPopup(auth, googleProvider);
                setCurrentState(true)
            } catch (error) {
                console.log(error)
            }
        }
    }

    async function desloguearse () {
        try {
             await signOut(auth)
            setCurrentState(false)
            setCurrentUser('')
        } catch (error) {
            
        }
    }

    return (
         <UserContext.Provider value ={{handleOnClick, handleUserStateChanged, currenState, currentUser, desloguearse, setCurrentState}}>
             {children}
         </UserContext.Provider>
     );
 }

export default UserProvider;

    
