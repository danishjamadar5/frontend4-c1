import React, {useState} from "react";


const Form = () => {

    let [user, setUser] = useState({name:"", email:"", password: "", confirmPassword: ""})
    let [showPassword, setShowPassword] = useState(false);
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")



        console.log("user", user);


        function validateForm(event){
            event.preventDefault();

            if(!user.name || !user.email || !user.password || !user.confirmPassword){
                setSuccess("")
                return setError("Error: Please Make sure fill all input field!")
            }
            if(user.name.length <3 || user.name.length>30){
                setSuccess("")
                return setError("Error: Please Make sure your Name should be min 3 characters and max 30 characters!")
            }
            if(!user.email.includes("@") || !user.email.includes(".")){
                setSuccess("")
                return setError("Error: Please Make sure your Email should contain @ and .!")
            }
            if(user.password.length < 8 || user.password.length > 15){
                setSuccess("")
                return setError("Error: Please Make sure your Password should be min 8 characters and max 15 characters!")
            }
            if(user.password !== user.confirmPassword){
                setSuccess("")
                return setError("Error: Please Make sure your passwords and confirm passwords match!")
            }

            setSuccess("Successfully Created!")
            setError("")
        } 
        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
          };
    return(
        
        <div className="container">
        <div className="left">
          <p className="desc">Find 3D Objects, Mockups and Illustration here.</p>
          <img src="https://i.ibb.co/Rp2q4Vv/abstraction.png" alt="" className="illustration" />
        </div>
        <div className="right">
          <div className="wrapper">
            <h1 className="heading">Create Account</h1>
            <div className="social-login">

               
              <a className="google">
                <img src="https://i.ibb.co/Mc8r1Z9/google.png" alt="" />
                <span>Sign up with Google</span>
              </a>
              <a className="facebook">
                <img src="https://i.ibb.co/19Y78qw/facebook.png" alt="" />
                <span>Sign up with Facebook</span>
              </a>
            </div>
            <div className="or">- OR -</div>
            <form onSubmit={validateForm} className="form">
              <div className="input-group">
                <input type="text"  placeholder="Full Name" 
                onChange={(event) => setUser({...user, name: event.target.value})}
                />
                
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email"
                onChange={(event) => setUser({...user, email: event.target.value})}
                />
                
              </div>
              <div className="input-group">
                <input type={showPassword ? 'text' : 'password'}  placeholder="Password"
                   onChange={(event) => setUser({...user, password: event.target.value})}
                />
                {showPassword ? (
                    <img
                    src="https://svgshare.com/i/uqu.svg"
                    alt=""
                    className="close-eye"
                    onClick={togglePasswordVisibility}
                    />
                ) : (
                    <img
                    src="https://svgshare.com/i/uqQ.svg"
                    alt=""
                    className="eye"
                    onClick={togglePasswordVisibility}
                    />
                )}
                </div>
                <div className="input-group">
                <input type={showPassword ? 'text' : 'password'} placeholder="Confirm Password" 
                   onChange={(event) => setUser({...user, confirmPassword: event.target.value})}
                />
                {showPassword ? (
                    <img
                    src="https://svgshare.com/i/uqu.svg"
                    alt=""
                    className="close-eye"
                    onClick={togglePasswordVisibility}
                    />
                ) : (
                    <img
                    src="https://svgshare.com/i/uqQ.svg"
                    alt=""
                    className="eye"
                    onClick={togglePasswordVisibility}
                    />
                )}
                </div>
              <button className="btn">Create Account</button>
            </form>
            <div className="msg">
                 {error && <p style={{ color: 'red' }}>{error}</p>}
                 {success && <p style={{ color: 'green' }}>{success}</p>}
            </div>
          </div>
        </div>
        
      </div>



    )
}

export default Form;
