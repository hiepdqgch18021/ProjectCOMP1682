import "./messenger.css"
import Header from "../Header/Header";
import Conversations from "./Conversations";
import Message from "./Message";
import ChatOnline from "./ChatOnline";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import userSlice from "../../redux/userSlice";
import { useRef } from "react";

export default function Messenger() {

    const url = process.env.REACT_APP_URL_AXIOS;
    const [conversationsValue, setConversationsValue] = useState([]);
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessages, setNewMessages] = useState("")
    const user = useSelector((state) => state.auth.login?.currentUser);
    const scrollRef = useRef()

    useEffect(() => {
        const getConversation = async () => {
            try {
                const res = await axios.get(url + '/conversation/get/' + user._id)
                console.log(res.data)
                setConversationsValue(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getConversation()
    }, [user._id])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(url + '/message/get/' + currentChat?._id)
                console.log(currentChat)
                setMessages(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMessages()
    }, [currentChat])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = {
            sender: user._id,
            text: newMessages,
            conversationId: currentChat._id
        }
        try {
            const res = await axios.post(url + "/message/send", message)
            setMessages([...messages, res.data]);
            setNewMessages("")
        } catch (error) {
            console.log(error)
        }
    }

useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior:"smooth"})
})

    return (
        <>
            <Header />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text"
                            placeholder="search your friend"
                            className="chatMenuInput" />

                        {conversationsValue ? (conversationsValue.map((c) => (
                            <div className="" onClick={() => setCurrentChat(c)}>
                                <Conversations key={c._id}
                                    conversationProp={c}
                                />
                            </div>
                        ))
                        ) : (<div> loading... </div>)
                        }

                    </div>
                </div>

                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {
                            currentChat ? (
                                <>

                                    <div className="chatBoxTop">
                                        {messages.map(m => (
                                            <div ref={scrollRef}>
                                                <Message messages={m} own={m.sender === user._id} />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="chatBoxBottom">
                                        <input type="text"
                                            className="chatMessageInput"
                                            placeholder="let enjoy your chat"
                                            onChange={(e) => setNewMessages(e.target.value)}
                                            value={newMessages}
                                        />
                                        <button className="chatSubmitButton" onClick={handleSubmit}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="sendButton bi bi-send-fill" viewBox="0 0 16 16">
                                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <span className="noConversationText">Open a conversation to start a chat</span>
                            )}
                    </div>
                </div>


                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
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































