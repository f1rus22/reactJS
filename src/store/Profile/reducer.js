import { EXAMPLE_ACTION, PROFILE_SET_NAME } from "./constants"

const initialState={
    showName: false,
    name: "No name",
}

  
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case EXAMPLE_ACTION:
        return {
          ...state,
          showName: !state.showName
        } 
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

