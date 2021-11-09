import { EXAMPLE_ACTION } from "./actionTypes"

const initialState={
    showName: false,
    name: "Alegz",
}

  
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case EXAMPLE_ACTION:
        return {
          ...state,
          showName: !state.showName
        }
        default:
          return state
    }
  }

