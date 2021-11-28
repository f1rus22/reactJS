import {SET_MESSAGES} from "./constants"

const initialState = {
    messages: {}
}

export const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case (SET_MESSAGES): {
            return {
                ...state,
                messages: payload
            }
        }
        default: return state
    }
}