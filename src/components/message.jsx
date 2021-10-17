import '../components/message.css'
import React from "react"

function Message(props) {
    return (
        <div className="message">
            {props.message}
        </div>
    )
}


export default Message