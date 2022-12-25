import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import axios from 'axios'
import "./Singlepost.css"
import { useState } from "react";
import {Link} from 'react-router-dom'

export default function Singlepost() {
  const location = useLocation();
  const path=(location.pathname.split("/")[2])
  const [post,setPost]=useState({})
  useEffect(()=>{
    const getpost= async ()=>{
      const res= await axios.get("/posts/"+path)
      setPost(res.data)
    }
    getpost()
  },[path])
  return (
    <div className="singlepost">
        <div className="singlepostwrapper">
          {post.photo && (
            <img src={post.photo}alt="" className="singlepostimg" />
          )}
            
        </div>
        <h1 className="singleposttitle">{post.title}
        <div className="singlepostedit">
        <i className="Singleposticon fa-solid fa-pen-to-square"></i>
        <i className="Singleposticon fa-solid fa-trash-can"></i>
        </div>
        </h1>
        <div className="singlepostinfo">
            <span className="singleauthor">Author:
            <Link to={'/?user=${post.username}'} className="link" >
            <b>{post.username}</b>
            
            </Link>
            </span>
            <span className="singledate">{new Date(post.createdAt).toDateString}</span>
        </div>
        <p className="singledesc">{post.desc}</p>
        
    </div>
  )
}
