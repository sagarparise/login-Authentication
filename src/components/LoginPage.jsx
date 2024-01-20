import { useRef, useState } from "react";

const LoginPage = ({ setUser})=>{

  const [action, setAction] = useState("Sign up");
  const name = useRef();
  const email = useRef();
  const password = useRef();
 
  const handleLogin = ()=>{
    const user={
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    }
    setUser(user)
  }

  return (
    <>
 
       <div className="form-container">
        
            <div>
               {action === "Sign up" ?  <p id="text">Welcome !&#128075;</p>:  <p id="text">Welcome Back!&#128075;</p>}
                <h2>Sign up to your account</h2>
            </div>
                <form action="" id="form">
                
                   {
                    action === 'Sign up' && (<div className="fields">
                    <label htmlFor="name">Your name</label>
                     <input type="text" ref={name} name="name" required/>
                     </div> )
                   }            

                    <div className="fields">
                    <label htmlFor="email" >Your email</label>
                    <input type="email" ref={email} name="email" required/>
                    </div>

                    <div className="fields">
                    <label htmlFor="password">Password</label>
                    <input type="password" ref={password} name="password" required/>
                    </div>

                    <div className="fields">
                    <button type="submit" id="submit-btn" onClick={handleLogin} >CONTINUE</button>
                    </div>
                    
                </form>
                {action === 'Sign up'? (
                  <div id="sign-up-block">
                  <p>Already have an account?</p>
                  <a href="#" onClick={()=>setAction("Login")}>login</a>
              </div>
                ) : (
                  <div id="sign-up-block">
                    <p>Don't have an account ?</p>
                    <a href="#" onClick={()=>setAction("Sign up")} >Sign up</a>
                </div>
                )}
        
        </div>
       
  
    </>
  );
}
export default LoginPage;