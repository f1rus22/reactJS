import {PROFILE_SET_NAME } from "./constants"

const initialState={
    name: "no Name",
}

  
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
          case PROFILE_SET_NAME:{
      return{
        ...state,
        name: action.payload
      }
    }
        default:
          return state
    }
  }

