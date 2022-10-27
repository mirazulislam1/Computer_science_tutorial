import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // signIn with google

    const googleLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // signIn with github

    const githubLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // create email and password 
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn email and password
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // image signIn
    const updateUserProfile = (profile) =>{
        return updateUserProfile(auth.currentUser, profile)
    }

    // sign out google
    const logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    })

    const authInfo = {user,loading, googleLogin, githubLogin, updateUserProfile, logOut, createUser, signIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;