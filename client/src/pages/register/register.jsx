import "./register.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Register() {
  const [usename, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handelsubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/auth/register", {
      usename,
      email,
      password
    });
    console.log(res)
  };
  return (

    <div className="register">
      <span className="registertitle">Register</span>
      <form className="registerform" onSubmit={handelsubmit}>
        <label>Username</label>
        <input type="text" className="registerinput" placeholder="Enter your username..."
          onChange={e => setUsername(e.target.value)}

        />
        <label>Email</label>
        <input type="email" className="registerinput" placeholder="Enter your Email..."
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input type="password" className="registerinput" placeholder="Enter your password..."
          onChange={e => setPassword(e.target.value)}
        />
        <button className="registerbtn" type="submit">Register</button>
      </form>
      <button className="registerlogin"> <Link to="/login" className="link">LOGIN</Link>
      </button>
    </div>

  )
}
