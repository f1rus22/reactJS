import { auth } from "../../services/firebase";
import { SET_AUTH, SET_ERROR, PROFILE_SET_NAME } from "./constants";


export const changeName = (payload)=> ({
    type: PROFILE_SET_NAME,
    payload
})

const setAuth = (authed) => ({
    type: SET_AUTH,
    payload: authed,
  });
  
  const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
  });
  
  export const connectProfileToFB = () => (dispatch) => {
    try {
      auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch(setAuth(true));
        } else {
          dispatch(setAuth(false));
        }
      });
    } catch (e) {
      console.log(e);
      dispatch(setError(e.message))
    }
  };
  
  export const singinWithFB = (name, pass) => (dispatch) => {
    try {
      auth.signInWithEmailAndPassword(name, pass);
    } catch (e) {
      alert(e.message);
      dispatch(setError(e.message));
    }
  };
  
  export const signUpWithFB = (name, pass) => (dispatch) => {
    try {
      auth.createUserWithEmailAndPassword(name, pass);
    } catch (e) {
      alert(e.message);
      dispatch(setError(e.message));
    }
  };
  
  export const logoutWithFB = () => (dispatch) => {
    try {
      auth.signOut();
    } catch (e) {
      console.log(e);
      dispatch(setError(e.message));
    }
  };
  