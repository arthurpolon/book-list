import React, { createContext, useContext, useState } from 'react';
import { auth } from '../firebase/config'

// import { Container } from './styles';
export const AuthContext = createContext()

function AuthContextProvider ({children}) {
    const [user, setUser] = useState()
    const [error, setError] = useState()

    auth.onAuthStateChanged(user => {
        setUser(user)
    })

    const signInUser = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(setError(''))
            .catch(err => setError(err.message))
    }

    const signOutUser = () => {
        auth.signOut()
    }

    const createUser = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(setError(''))
            .catch(err => setError(err.message))
    }

    return (
        <AuthContext.Provider value={ {user, setUser, createUser, signInUser, signOutUser, error, setError} }>
            { children }
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContextProvider;