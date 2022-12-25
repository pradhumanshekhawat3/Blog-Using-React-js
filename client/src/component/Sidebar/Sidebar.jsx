import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
export default function Sidebar() {
  const [cats,setcat]=useState([])

  useEffect(()=>{
const getcats= async()=>{
  const res= await axios.get("/categories")
  setcat(res.data)
}
getcats();
  },[])
  return (
    <div className='sidebar'>
      <div className="sidebaritem">
        <span className="sidebartitle">
          ABOUT ME
        </span>
        <img src="../../profile 1.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque ipsa sunt. Qui excepturi deleniti dolores doloribus perspiciatis magnam officiis. Consectetur totam minima nemo ex deserunt numquam eos, aliquid minus.</p>
      </div>
      <div className="sidebaritem">
        <span className='sidebartitle'>CATEGORIES</span>
        <ul className='sidebarlist'>
          {cats.map(c=>(
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebatlistitem">{c.name}</li>
            </Link>
            
          ))}
          
          {/* <li className="sidebatlistitem">SPORTS</li>
          <li className="sidebatlistitem">EDUCATION</li>
          <li className="sidebatlistitem">SPRITUALITY</li>
          <li className="sidebatlistitem">CAREER</li> */}
        </ul>
      </div>
      <div className="sidebaritem">
        <span className='sidebartitle'>FOLLOW US</span>
        <div className="sidebarsocial">
          <a  href="https://www.facebook.com/pradhuman.shekhawat.96">
            <i className="sidebaricons fa-brands fa-facebook-square"></i>
          </a>
          <i className="sidebaricons fa-brands fa-instagram-square"></i>
          <i className="sidebaricons fa-brands fa-twitter-square"></i>
          <i className="sidebaricons fa-brands fa-github-square"></i>
        </div>

      </div>
    </div>
  )
}
