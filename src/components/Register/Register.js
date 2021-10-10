import React from 'react';
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <div className = "form-style">
            <div>
                <h2>Create Account</h2>
                <form onSubmit = "">
                    <input type="email" name="" placeholder = "Your Email" />
                    <br />
                    <input type="password" name="" placeholder = "Enter your password"/>
                    <br />
                    <input type="password" name="" placeholder = "Re-enter your password"/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to = "/login">Sign In</Link></p>
                <div style = {{textAlign: 'center'}}>-------- or --------</div>
                <div style = {{display: 'flex', justifyContent: 'center'}}>
               <button className = "btn-regular">Google Sign In</button>
               </div>
            </div>
        </div>
    );
};

export default Register;