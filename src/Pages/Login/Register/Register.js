import { getAuth , createUserWithEmailAndPassword} from '@firebase/auth';
import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';


const Register = () => {
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
        createUserWithEmailAndPassword (auth, email, password)
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
            <h2>Register Now</h2>
            <form action="" onSubmit={handleRegistration}>
                <input onBlur={handleEmailChange} required type="email" name="" id="" placeholder='Your Email' />
                <br />
                <br />
                <input onBlur={handlePassword} required type="password" name="" id="" placeholder='Password' />
               
                <div className="row mb-2 text-danger text-center">{error}</div>
                <br /><br />
                <input type="submit" value="Register" className='btn-banner' />
<br />
<p>Already Have An Account?  <Link to ='/login'>Login</Link></p>

        <button onClick={signinWithGoogle} className='btn btn-warning text-white'>Google SignIn</button>
            </form>
        </div>
    );
};

export default Register;