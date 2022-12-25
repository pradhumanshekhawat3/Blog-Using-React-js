import "./login.css"
import { Link } from "react-router-dom";
export default function login() {
    return ( <div className="login">
    <span className="logintitle">Login</span>
    <form className="loginform">
        <label>Email</label>
        <input type="text" className="logininput" placeholder="Enter your Email..." />
        <label>Password</label>
        <input type="text"className="logininput" placeholder="Enter your password..." />
        <button className="loginbtn">Login</button>
    </form>
    <button className="loginresgister"><Link to="/register" className="link">REGISTER</Link>
    </button>
</div>
       
    )
}
