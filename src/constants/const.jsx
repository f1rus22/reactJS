export const ROUTES = {
  HOME: "/",
  PROFILE: "/profile",
  CHAT: "/chats",
  CHATS: "/chats/:chatId?",
  NEWS: "/news",
  SINGIN: "/singin",
  SINGUP: "/singup",
};

export const API_URL = "https://api.spaceflightnewsapi.net/v3/articles";

export const REQUEST_STATUS = {
  IDLE: 0,
  PENDING: 1,
  SUCCES: 2,
  error: 3,
};
