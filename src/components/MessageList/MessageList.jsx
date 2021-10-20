import React from "react";
import './messageList.css'

export default function MessageList(props) {
    return (
        <div className="messageList">
            <ul>
                {props.messageList.map((message, index) => {
                    return (
                        <div className="message" key={index}>
                            <div>{message.autor}</div>
                            <div>{message.text}</div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}