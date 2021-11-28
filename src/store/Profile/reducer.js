import {SET_AUTH, SET_ERROR, PROFILE_SET_NAME } from "./constants"

const initialState={
    name: "no Name",
    authorized: false,
    error: null,
}

  
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case PROFILE_SET_NAME:{
        return{
          ...state,
          name: action.payload
        }
      }
      case SET_AUTH: {
        return {
          ...state,
          authorized: action.payload,
          error: null,
        };
      }
      case SET_ERROR: {
        return {
          ...state,
          error: action.payload,
        };
      }
        default:
          return state
    }
  }

