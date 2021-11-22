import React, { useState } from 'react';
import initializeAuthentication from '../../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication()

const Login = e => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const auth = getAuth();

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }
        isLogin ? processLogin(email,password) : createNewUser(email,password)
    }

    const createNewUser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            console.log(user);
            setError('')
        })
        .catch(error => {
            setError('Invalid email or email already in use')
        })
 
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const processLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                setError(errorCode)

            })
    }
    const toogleValue = e => {
        setIsLogin(e.target.checked);
    }

    return (
        <div>
            {<form onSubmit={handleRegistration}>
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <input className='w-25 mx-auto m-3 form-control' type="text" required onBlur={handleEmailChange} placeholder='Enter Your Email' />
                <input type="password" onBlur={handlePasswordChange} placeholder='Enter Your Password' required className='w-25 mx-auto form-control' />
                <p className='text-danger'>{error}</p>
                <input onClick={toogleValue} type="checkbox" name="" id="" />Already Registered?
                <br />
                <button className='btn btn-primary m-2' type="submit">{isLogin ? 'login' : 'SignUp'}</button>
            </form>}
        </div>
    );
};

export default Login;