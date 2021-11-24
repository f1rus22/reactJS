import { API_URL } from "../../constants/const";
import { REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCES } from "./constants";

export const getArticlesPending=()=>({
    type: REQUEST_PENDING
});

export const getArticlesSucces=(articles)=>({
    type: REQUEST_SUCCES,
    payload: articles
});

export const getArticlesError = (error)=>({
    type: REQUEST_ERROR,
    payload: error
});


export const getArticles=()=> async (dispatch)=>{
    dispatch(getArticlesPending());

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }
        const result = await response.json();
        dispatch(getArticlesSucces(result));
    } catch (err) {
        dispatch(getArticlesError(err.message));
    } 
}
