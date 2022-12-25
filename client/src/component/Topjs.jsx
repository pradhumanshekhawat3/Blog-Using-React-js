import { Link } from "react-router-dom";
import React from "react"
import "./Topcs.css"

export default function topbar() {
    const user = false;
    return (
        <>
            <div className='top'>

                <div className="topleft">
                    <a href="https://www.facebook.com/pradhuman.shekhawat.96">
                        <i className="topicons fa-brands fa-facebook-square"></i>
                    </a>
                    <i className="topicons fa-brands fa-instagram-square"></i>
                    <i className="topicons fa-brands fa-twitter-square"></i>
                    <i className="topicons fa-brands fa-github-square"></i>
                </div>
                <div className="topcenter">
                    <div className="toplist">
                        <li className="toplistitem">
                            <Link to="/" className="link">HOME</Link>
                        </li>
                        <li className="toplistitem"> <Link to="/about" className="link">ABOUT</Link></li>
                        <li className="toplistitem"> <Link to="/contact" className="link">CONTACT</Link></li>
                        <li className="toplistitem"> <Link to="/write" className="link">WRITE</Link></li>
                        <li className="toplistitem">
                            {user && "LOGOUT"}
                        </li>
                    </div>
                </div>
                <div className="topright">
                    {
                        user ? (<>
                            <img className="topimage"
                                src="./src/component/profile 1.jpg"
                                alt="" />
                            <i className="topsearch fa-solid fa-magnifying-glass"></i>
                        </>

                        ) : (
                            <>
                                <ul className="toplist">
                                    <li className="toplistitem"> <Link to="/login" className="link">LOGIN</Link>
                                    </li>
                                    <li className="toplistitem">
                                        <Link to="/register" className="link">REGISTER</Link>
                                    </li>
                                </ul>


                            </>

                        )
                    }


                </div>
            </div>
        </>
    )
}
