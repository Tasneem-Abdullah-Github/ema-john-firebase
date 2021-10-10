import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }
    return (
        <div className = "form-style">
            <div>
                <h2>Login</h2>
                <form onSubmit = "">
                    <input type="email" name = "" placeholder = "Your Email" />
                <br />
                <input type="password" name="" placeholder = "Your Password"/>
                <br />
                <input type="submit" value="Submit"/>
                </form>
                <p>New to Ema-John? <Link to = "/register">Create Account</Link></p>
               <div><p style = {{textAlign: 'center'}}>-------- or --------</p></div>
               <div style = {{display: 'flex', justifyContent: 'center'}}>
               <button onClick = {handleGoogleLogin} className = "btn-regular">Google Sign In</button>
               </div>
            </div>
        </div>
    );
};

export default Login;