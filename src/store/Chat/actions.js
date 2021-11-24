import {SET_CHATS, SET_ERROR} from "./constants";
import { db } from "../../services/firebase";
import faker from "faker";

const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats,
  });
  
  const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
  });
  
  export const connectChatsToFB = () => (dispatch) => {
    try {
      db.ref("chats").off();
      db.ref("chats").on("value", (snapshot) => {
        let newChats = {};
        snapshot.forEach((snap) => {
          const currentChat = snap.val();
          newChats[currentChat.id] = currentChat;
        });
    
        dispatch(setChats(newChats));
      });
    } catch (e) {
      dispatch(setError(e.message));
    }
  };
  
  export const addChatWithFB = (name) => (dispatch) => {
    try {
      const id = `chat-${faker.datatype.number()}`;
    
      db.ref("chats").child(id).set({
        name,
        id,
      });
    } catch (e) {
      dispatch(setError(e.message));
    }
  }
  
  export const deleteChatWithFB = (id) => (dispatch) => {
    try {
      db.ref("chats").child(id).remove();
    } catch (e) {
      dispatch(setError(e.message));
    }
  };
  

