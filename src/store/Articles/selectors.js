import { REQUEST_STATUS } from "../../constants/const";

export const selectArticles = (state)=>state.articles.data;
export const selectArticlesIsLoading=(state)=>state.articles.request.status===REQUEST_STATUS.PENDING;
export const selectaArticlesError=(state)=> state.articles.request.error;