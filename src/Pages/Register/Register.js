import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Context/UseAuth';

const Register = () => {
    const {handleGoogleSignIn,handleRegister, updateName, handleEmail, handlePassword} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const Redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        handleGoogleSignIn()
        .then(result => {
            history.push(Redirect_uri)
        })
    }

    const handlePasswordLogin = () => {
        handleRegister()
        .then(result => {
            history.push(Redirect_uri)
        })
    }

    return (
        <div className="authentication">
            <div>
                <form>
                    <h2>Please Register</h2>
                    <input onChange={updateName} className="input" type="name" name="name" placeholder="Your Name" />
                    <br />
                    <input onBlur={handleEmail} className="input" type="email" name="email" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePassword} className="input" type="password" name="password" id="" placeholder="Your Password" />
                    <br />
                    <input onBlur={handlePassword} className="input" type="password" name="password" id="" placeholder="Re-enter Password" />
                    <br /> <br />
                    <input onClick={handlePasswordLogin} className="btn-authentication" type="submit" value="submit" />
                </form>
                <p>Already Have An Account ? <Link className="link" to="/login">Login</Link></p>
                <button className="btn-regular" 
                onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;