import React from 'react'
import "./messenger.css"

export default function Message({own,messages}) {
    return (
        <>
            <div className={own ? "message own" : "message"}>
                <div className="messageTop">
                    {/* <img className='messageImg' src="https://wallpaperaccess.com/full/1331386.jpg" alt="" /> */}
                    <p className='messageText'>
                        {messages.text}
                    </p>
                </div>

                <div className="messageBottom">
                    {messages.createdAt}
                </div>
            </div>
        </>
    )
}
