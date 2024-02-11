import { useState } from "react";

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
    const handleSubmit=()=>{
        setMessage("Loading....")
        if(email==="sdeepikas88@gmail.com" && password==="test")
        setTimeout(()=>{
            setMessage("Successfully loggedIn");
        },1000);
        else
        setTimeout(()=>{
            setMessage("Incorrect credential");
        },2000);
    }
    return(
        <>
        <h1>Login</h1>
        <div>
        <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <div>
        
        <button onClick={handleSubmit}>Sign In</button>
        </div>
        {message && <p>{message}</p>}
        </>
    );
};

export default Login;