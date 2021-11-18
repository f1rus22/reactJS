import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE, } from "./constants";

const initialState = {
      chat1: {
      messages: [],
      name: "Felipe Massa",
      id: "chat1",
    },
  
    chat2: {
      messages: [],
      name: "Carlos Sainz",
      id: "chat2",
    },
  
    chat3: {
      messages: [],
      name: "Michael Schumacher",
      id: "chat3",
    },
};



  export const chatsReducer = (state=initialState, {type, payload})=>{
      switch (type) {
          case ADD_CHAT: {
              return    {
            ...state,
            [payload.chatId]: {
                name: payload.name, 
                id: payload.chatId, 
                messages: [],
            },
        };
        
    }

    case DELETE_CHAT:{
      const newState={...state};
        delete newState[payload];
      return newState;
    }
    case SEND_MESSAGE: {
      return    {
    ...state,
    [payload.chatId]: {
      ...state[payload.chatId],
      messages: [...state[payload.chatId].messages, payload.message]
    },
};

}
    default: 
        return state;
    }
}