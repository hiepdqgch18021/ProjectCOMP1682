import "./messenger.css"
import Header from "../Header/Header";
import Conversations from "./Conversations";
import Message from "./Message";
import ChatOnline from "./ChatOnline";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Messenger() {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const url = process.env.REACT_APP_URL_AXIOS;

    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getConversation = async () => {
            try {
                const res = await axios.get(url + `/conversation/get/${user._id}`)
                setConversations(res.data)
                // console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getConversation()
    }, [user._id])

    return (
        <>
            <Header />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text"
                            placeholder="search your friend"
                            className="chatMenuInput" />

                        <Conversations
                            conversation={conversations.conversation.member}
                            currentUser={user}
                        /> 

                    </div>
                </div>

                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            chat box top
                            <Message own={true} />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message own={true} />

                        </div>

                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="let enjoy your chat"></textarea>
                            <button className="chatSubmitButton">send</button>
                        </div>
                    </div>
                </div>


                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}































