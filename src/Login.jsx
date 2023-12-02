import axios from 'axios';
import React, {useState} from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom';
import Message from './Components/Header/Message';


export default function Login() {
    // useNavigate ko navigate name ke variable me le raha hai.. navigate ek component ko dusare Component me import karna hi navigatekahlata hai...
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // this states declaire to be used only Message Components..
    const [message,setMessage] = useState("");
    const [getMessage, setGetMessage] = useState(false);
    const [status, setStatus] = useState("");


    const handlelogin=()=>{
        // formdata data ko bandal karke usko server tak data ko XMLHttp request se data ko pahuchana hi formData ka work hota hai. Without HTML tag ka use kiye data ko pahuchana.
        const formData = new FormData();
        formData.append("email",email);
        formData.append("password",password);
        console.log("login Function called");

        axios.post("http://localhost:8000/login",formData)
        .then((res)=>{
            console.log("backend response",res);
            // condition ke true hon par backend ka message print karega..
            
            if(res?.data?.status===1){
                // localStorage.setItem("email", "bikendra@gmail.com");  // to give static login mail.
                localStorage.setItem("email",res?.data?.email); // to give denamic email in server.
                localStorage.setItem("token",res?.data?.token); // to give denamic token in server.
                console.log("res?.data",res?.data);
                setMessage(res?.data?.message); // backEnd ke response se message ko Destracture kar rahe hai..
                setGetMessage(true); // status true hone par getmessage me true set ho jayega jo ki getmessama pahle se false..
                setStatus(res?.data?.status); // status true hone par status state me 1 set ho jayega kiyuki status 1 tabhi milega jab username and passWord true hoga..

                setTimeout(()=>{
                    console.log("navigate Anothyer route");
                    // kisi bhi Component ko kisi dusare Component me Navigate karana ya use page tak pahuchana navigate karna kahlata hai...
                    navigate("/")
                    // navigate("/Home_main")
                  },1000)
            }
            else{
                setMessage(res?.data?.message); // backEnd ke response se message ko Destracture kar rahe hai..
                setGetMessage(true); // status false hone par getmessage me true set ho jayega jo ki getmessama pahle se false..
                setStatus(res?.data?.status); // status false hone par status state me 0 set ho jayega kiyuki status 0 tabhi milega jab username and passWord false hoga..
                setTimeout(()=>{
                    setGetMessage(false);
                });    
            }
        })
        .catch((error)=>{
            console.log("backend error",error);
            setMessage("Sometime went wrong! please check internate Connectivity")
        });
    };
    return (
     <div>
            {/* Login Form  */}
        <div className='login_main'>
            {/* <center> */}
                <fieldset className='form1'>
                    <div>
                        <h1>Login Form</h1><br/>
                        <div className='form_group1'>
                            <label htmlFor="email">Email</label>
                            <input type="email" value={email} name='email' placeholder='Enter email' onChange={(e) => { setEmail(e.target.value) }}/>
                        </div>
                        <div className='form_group1'>
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} name='password' placeholder='Enter password' onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className='form_button1'>
                            {email.length>0&&password.length>0?(<button onClick={handlelogin} style={{cursor:"pointer"}}>Login</button>):(<button style={{cursor:"not-allowed"}} disabled>Login</button>)}
                        </div>
                        Don't have an account?<Link to="/register">Create an account</Link><br/><br />
                        <Link to="/forget">Reset Password</Link>  Click now<br/>
                         
                         {
                            // agar getMessage true hota hai to output me ye mesage and status ke Accourding pop-up Show hoga. Message Component ka..
                            getMessage?<Message message={message} status={status} />:""
                         }
                    </div>
                </fieldset>
            {/* </center> */}
        </div>
     </div>
    )
}




