import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./messenger.css"


export default function Conversations({ conversationProp }) {
  const [user, setUser] = useState(null)
  const url = process.env.REACT_APP_URL_AXIOS;
  const { id } = useParams();
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  const token = localStorage.getItem('jwtLogin')

  useEffect(() => {
    const friendId = conversationProp.members.find((m) => m !== currentUser._id)

    const getUser = async () => {
      try {

        const res = await axios.get(url + "/user/getOneUsers/" + friendId,
          {
            headers: {
              token: `Bearer ${token}`,
              accept: 'application/json'
            }
          }
        )
        console.log(res)
        setUser(res.data)
      } catch (error) {
        console.log(error)
      }
    };

    getUser()
  }, [conversationProp, currentUser])

  return (

    <>

      {user ? (
        <div className="conversation">
          <img className='conversationImg' src={user?.imageAvatar ? user.imageAvatar : "https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png"} alt="" />
          {/* user.imageAvatar ? user.imageAvatar : */}
          <span className='conversationName'>{user?.username}</span>
        </div>
      ) : (<div> loading...</div>)

      }



    </>
  )
}
