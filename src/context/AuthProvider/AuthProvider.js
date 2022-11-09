import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // user create
    const userCreate = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User Log In
    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Sign In
    const GoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    // User Log out
    const LogOut = () => {
        // localStorage.removeItem('genius-token')
        return signOut(auth)
    }

    // manage user
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const AuthInfo = {
        user,
        loading,
        userCreate,
        LogIn,
        LogOut,
        GoogleSignIn,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;