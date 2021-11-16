import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer  } from "redux-persist";
import { chatsReducer } from "./Chat/reducer";
import { profileReducer } from "./Profile/reducer";

const persistConfig = {
    key: 'f1PilotsChat',
    storage,
}

const rootReducer = combineReducers({
        chats: chatsReducer, 
        profile: profileReducer,      
    });

    const persistedReducer = persistReducer(persistConfig, rootReducer);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

