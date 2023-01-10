import React, { useState, useEffect} from 'react';
import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../Services/firebaseConfig'


export const UserContext = createContext();

    const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');
    const [currenState, setCurrentState] = useState(false);
    
//     // useEffect(()=>{
//     //     setCurrentState(false)
//     //     onAuthStateChanged(auth, handleUserStateChanged);
//     // },[currenState]);


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
                const res = await signInWithPopup(auth, googleProvider);
                console.log(res)
                setCurrentState(true)
            } catch (error) {
                console.log(error)
            }
        }
    }

    async function desloguearse () {
        try {
            const res = await signOut(auth)
            console.log(res)
            setCurrentState(false)
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

    
