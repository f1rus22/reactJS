import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./Chat/reducer";
import { profileReducer } from "./Profile/reducer";



export const store = createStore(
    combineReducers({
        chats: chatsReducer, 
        profile: profileReducer,
                
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


