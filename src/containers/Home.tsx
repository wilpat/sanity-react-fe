import  { useState, useRef, useEffect } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'

import { SideBar, UserProfile } from "../components"
import Pin from "./Pin"
import { client } from "../client"
import logo from '../assets/logo.png'
import { userQuery } from '../utils/sanity-data';
import { User } from "../utils/interfaces"

export const Home = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [user, setUser] = useState<null | User>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const userInfo = localStorage.getItem('user') ? JSON.parse(`${localStorage.getItem('user')}`) : localStorage.clear()

  useEffect(() => {
    try {
      const query = userQuery(userInfo?._id)
      client.fetch(query).then(data => {
        setUser(data[0])
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <SideBar user = {user && user}/>
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
        <Link to="/">
          <img src={logo} alt="Logo" className="w-28"/>
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={user?.image} alt="UserImage" className="w-28"/>
        </Link>
      </div>
      {
        toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle fontSize={30} className='cursor-pointer' onClick = {() => setToggleSidebar(false)} />
            </div>
            <SideBar user = {user && user} closeToggle={setToggleSidebar} ref={scrollRef}/>
          </div>
        )
      }
      <div className="pb-2 flex-1 h-screen overflow-y-scroll">
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />}></Route>
          <Route path="/*" element={<Pin user = {user && user} />} ></Route>
        </Routes>
      </div>
    </div>
  )
}
