import React from 'react'
import "./messenger.css"


export default function ChatOnline() {
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
