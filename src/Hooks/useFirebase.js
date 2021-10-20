import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Firebase/FirebaseInit";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    };

    const updateName = e => {
        setName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleRegister = e => {
        e.preventDefault();
        setUser(email, password);
        if (password.length < 6) {
        setError('Password must be atleast 6 characters')
        return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        setError('Password must has two uppercase letters.')
        return;
        }
        user?.email ? processLogin(email, password) : registerNewUser(email, password)
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
        const user = result.user;
        setUser(user);
        setError('');
        })
        .catch(error => {
        setError(error.message)
        })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
        const user = result.user;
        setUser(user);
        verifyEmail();
        updateUserName();
        setError('');
        })   
        .catch(error => {
        setError(error.message);
        })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => { })
    }

    const updateUserName = () => {
        updateProfile(auth.currentUser, {displayName: Name})
        .then(result => {

    })
    }

    const logOut = () => {
        signOut(auth)
        .then( () => {
        setUser({})
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            } 
        })
    }, [])

    return {
        user,
        error,
        handleGoogleSignIn,
        updateName,
        handleEmail,
        handlePassword,
        handleRegister,
        logOut
    }
};

export default useFirebase;