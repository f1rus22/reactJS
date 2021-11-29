import { SET_MESSAGES } from "../constants";
import { messagesReducer } from "../reducer";

 describe("some text message", ()=>{
     test("", ()=>{
         const expected={messages: {}};
         const received = messagesReducer(undefined, {SET_MESSAGES});
         expect(received).toEqual(expected);
     })
 }) 