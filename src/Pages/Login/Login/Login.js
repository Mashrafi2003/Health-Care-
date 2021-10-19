// import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Link , useLocation } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
// import useFirebase from '../../../Hook/useFirebase';
import './Login.css'
import { getAuth,signInWithEmailAndPassword} from "firebase/auth";


const Login = () => {
    const auth = getAuth();
    // Used Context API
    const { signinWithGoogle} = useAuth()
    
    
    const location = useLocation()
    console.log(location.state?.from)


    // States for Various Changes
    const [email, setEmail] = useState('')
    const [password , setPassword]= useState('')
    const [error , setError] = useState('')

    // Email password Authentication Process
    // Function for User mail and password
    const handleRegistration=(e)=>{
        e.preventDefault();
        console.log(email, password)
        if(password.length<6){
            return setError('Password must be at least six character')
        }
        signInWithEmailAndPassword (auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            
        })
        .catch((error) => {
           setError(error.message);
           setError(error.code)
          });
        
        
    }
     const handleEmailChange = (e) =>{
        setEmail(e.target.value)
        e.preventDefault();
    }
    const handlePassword = e=>{
        setPassword(e.target.value)
        e.preventDefault();
    }

    

    return (
        <div className='login-page'>
            <h2>Login</h2>
<form onSubmit={handleRegistration} className=' d-flex align-items-center justify-content-center'>
    <div>
        <div class="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input onBlur={handleEmailChange} required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted text-white">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input onBlur={handlePassword} required type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <br />
        <input type="submit" className='btn-banner' value="Login" />
    </div>
</form>

<p>New to Vicodin Clinic ?<Link to='/register'>Create Account</Link></p>

<button onClick={signinWithGoogle} className='btn btn-warning p-2 text-white'>Google Login</button>
        </div>
    );
};

export default Login;