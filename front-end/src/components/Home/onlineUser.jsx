import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from "react-redux";

import './home.css'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function OnlineUser() {

  const [friends, setFriends] = useState([])
  const url = process.env.REACT_APP_URL_AXIOS;
  const user = useSelector((state) => state.auth.login.currentUser);


  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(url + "/user/getFriend/" + user._id);
        console.log(friendList.data);
        setFriends(friendList.data)
      } catch (error) {
        console.error(error)
      }
    };
    getFriends();

  }, [user._id])

  return (
    <div className="chatOnlineHome">
      <div className="chatOnlineFriendHome">
        {friends.map((f) => (
          <Link to={`/UserProfile/${f._id}`}>
            <div className="chatOnlineContainerHome">
              <img className='chatOnlineImgHome'
                src={f.imageAvatar ? f.imageAvatar : "https://wallpaper.dog/large/629461.jpg"}
                alt="" />
              <div className="chatOnlineBadgeHome">'''</div>
              <span className="chatOnlineNameHome"> {f.name} </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

