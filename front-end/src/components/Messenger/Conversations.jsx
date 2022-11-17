import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./messenger.css"


export default function Conversations({conversation,currentUser}) {
const [user,setUser] = useState(null)
const url = process.env.REACT_APP_URL_AXIOS;

useEffect(()=>{
  // const friendId = conversation.member.find()//.member.find(m=>m !== currentUser._id)
const getUser = async()=>{
  try {
    const res = await axios(url + "/user/getOneUsers?userId=")
console.log(res)
  } catch (error) {
    console.log(error)
  }
   
}
getUser()
},[conversation,currentUser])

  return (

    <>
    <div className="conversation">
        <img className='conversationImg' src="https://wallpaper.dog/large/20461272.jpg" alt="" />
        <span className='conversationName'>john</span>
    </div>
    </>
  )
}
