import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./messenger.css"


export default function ChatOnline({ onlineUsers, setCurrentChat }) {

    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const url = process.env.REACT_APP_URL_AXIOS;

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get(url + "/user/getFriend/" + user._id);
            console.log(res.data);
            setFriends(res.data)
        }
        getFriends()
    }, [user._id]);

    console.log(friends);
    console.log(onlineFriends);


    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)))
    }, [friends, onlineUsers])

    console.log(onlineUsers)

    const openConversation = async (friends) => {
        try {
            const res = await axios.get(url + `/conversation/find/${user._id}/${friends._id}`);
            console.log(res)
            setCurrentChat(res.data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="chatOnline mt-0">
            <span >online friend</span>

            {onlineFriends.map((o) => (

                <div className="chatOnlineFriend"
                    onClick={() => openConversation(o)}
                >
                    <div className="chatOnlineImgContainer">
                        <img className='chatOnlineImg'
                            // src={o.imageAvatar}
                            src={o.imageAvatar ? o.imageAvatar : "https://media.istockphoto.com/id/1305665241/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg?s=170667a&w=0&k=20&c=hdSlOI6dkmjABHFBYK2ZsA0_-iSENg7k9u_Sa4R9GxY="}
                            alt="" />
                        <div className="chatOnlineBadge">""</div>
                    </div>
                    <div className="chatOnlineName"> {o.username} </div>
                </div>
            ))}
        </div>
    );
}

