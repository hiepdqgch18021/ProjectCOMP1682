import React, { useState } from 'react'
import { useEffect } from 'react';
import "./messenger.css"


export default function ChatOnline({onlineUsers,currentId,setCurrentChat}) {
    
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);
    
useEffect(()=>{
    
})

    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className='chatOnlineImg' 
                            src="https://wallpaper.dog/large/629461.jpg" 
                            alt="" />
                    <div className="chatOnlineBadge">"" </div> 
                </div>
                <span className="chatOnlineName"> Yang </span>
            </div>

        </div>
    );
}
