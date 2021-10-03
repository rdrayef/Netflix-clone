import React, { useRef } from 'react'
import { auth } from './firebase';
import './SignUp.css';

function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const regiser = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value).then(() => {
                alert("account created successfully");
            }).catch(error => {
                alert(error.message);
            })
    }


    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then(() => {
            alert("you are logged in ");
        }).catch(error => {
            alert(error.message);
        })
    }


    return (
        <div className="signup">

            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" name="email" id="" />
                <input ref={passwordRef} type="password" name="password" id="" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4><span className="signup__gray">New to Netflix ? </span>
                    <span className="signup__link" onClick={regiser}>
                        Sign up now.
                    </span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp
