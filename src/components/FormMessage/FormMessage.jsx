import React from "react";
import './formMessage.css'

export default function FormMessage(props) {


    const { handleMessFormSubmit } = props;
    const { setIsTyping } = props;
    const { message } = props;
    const { sender } = props;
    const { setMessage } = props;
    const { setSender } = props;
    return (

        <form className="formMessage" onSubmit={handleMessFormSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={sender} onChange={event => {
                { setIsTyping(true) };
                setSender(event.target.value)
            }} />
            <label htmlFor="text">Message</label>
            <input type="text" name="text" id="text" value={message} onChange={event => {

                setMessage(event.target.value)
            }} />
            <button >Send message</button>
        </form>
    )
}