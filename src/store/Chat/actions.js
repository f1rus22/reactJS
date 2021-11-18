import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE, } from "./constants";

export const addChat =(chatId, name)=>({
    type: ADD_CHAT,
    payload:{
        chatId,
        name,
    },
});


export const deleteChat=(chatId)=>({
    type: DELETE_CHAT,
    payload:chatId,
});


export const sendMessage = (chatId, message, name)=>({
    type: SEND_MESSAGE,
    payload:{
        chatId,
        message,
    },
});

let timeout;


export const sendMessageWithReplay =(chatId, message, name)=>(dispatch)=>{ 
dispatch(sendMessage(chatId, message, name));

if(timeout) {
    clearTimeout(timeout);
}

setTimeout(()=>{
    dispatch(sendMessage(chatId, {author: name, text: "Message from thunk"}))
}, 1000);
}