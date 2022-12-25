import { useEffect } from "react"
import { useState } from "react"
import Header from "../../component/header/header"
import Posts from "../../component/Posts/Posts"
import Sidebar from "../../component/Sidebar/Sidebar"
import "./home.css"
import axios from 'axios'
import { useLocation } from "react-router-dom"

export default function Home() {

  const [posts,setposts]= useState([]);
  const {search} = useLocation()

  useEffect(()=>{
    const fetchposts= async()=>{
     const res = await axios.get("/posts"+ search);
    setposts(res.data);
    }
    fetchposts()
  },[search])
  return (
    <>
    <Header/>
    <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
    </div>
    </>
  )
}

