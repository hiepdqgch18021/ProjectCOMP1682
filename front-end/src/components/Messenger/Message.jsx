import React from 'react'
import "./messenger.css"
export default function Message({own}) {
    return (
        <>
            <div className={own ? "message own" : "message"}>
                <div className="messageTop">
                    <img className='messageImg' src="https://wallpaperaccess.com/full/1331386.jpg" alt="" />
                    <p className='messageText'>
                       Tenetur a obcaecati sequi magni reprehenderit delectus aspernatur mollitia in!
                    </p>
                </div>

                <div className="messageBottom">
                    1 hour ago
                </div>
            </div>
        </>
    )
}
