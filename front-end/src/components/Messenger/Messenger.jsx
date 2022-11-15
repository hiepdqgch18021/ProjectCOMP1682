import "./messenger.css"
import Header from "../Header/Header";
import Conversations from "./Conversations";
import Message from "./Message";
import ChatOnline from "./ChatOnline";

export default function Messenger() {
    return (
        <>
            <Header />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text"
                            placeholder="search your friend"
                            className="chatMenuInput" />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
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
                        <ChatOnline/>
                        <ChatOnline/>
                        <ChatOnline/>
                        <ChatOnline/>
                        <ChatOnline/>
                        <ChatOnline/>
                        <ChatOnline/>
                    </div>
                </div>
            </div>
        </>
    )
}































