import { getAuth, signInWithPopup, GoogleAuthProvider, signOut , onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAuthentication from "../Pages/Login/Firebase/firebase.init";

intializeAuthentication()

const useFirebase = () =>{
    const [user , setUser] = useState()
    const auth = getAuth()
    const [error , setError] = useState()
    const googleProvider = new GoogleAuthProvider();



    const signinWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(res=>{

        })    
    }
    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch(error=>{
            setError(error.message)
        })
    }
// Observer For User's Current Situtation
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{

            }
        })
    },[])
    return{
        user,
        signinWithGoogle,
        logOut,
        error,
    }

}
export default useFirebase;