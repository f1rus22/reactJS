import { REQUEST_STATUS } from "../../constants/const";
import { REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCES } from "./constants";

const initialState={
  data:[],
  request:{
    status: REQUEST_STATUS.IDLE,
    error: null,
  }
}

export const articlesReducer = (state=initialState, {type, payload})=>{
  switch(type){
    case REQUEST_PENDING:{
      return{
        ...state,
        request:{
          ...state.request,
          error: null,
          status: REQUEST_STATUS.PENDING
        },
      };
    }
    case REQUEST_SUCCES:{
      return{
        ...state,
        data: payload,
        request:{
          status: REQUEST_STATUS.SUCCES,
        },
      };
    }
    case REQUEST_ERROR:{
      return{
        ...state,
        request:{
          status: REQUEST_STATUS.error,
          error: payload,
        },
      };
    }
    default:
      return state;
  }
}