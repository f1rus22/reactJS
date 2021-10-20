import React, { useState, useEffect } from 'react';
import './App.css';
import FormMessage from './components/FormMessage/FormMessage';
import MessageList from './components/MessageList/MessageList';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');
  const [sender, setSender] = useState('');
  const [isTyping, setIsTyping] = useState(true);


  useEffect(() => {
    if (isTyping) {
      return
    }
    setTimeout(loadForBot, 1500)

  }, [isTyping]);


  const loadMessage = () => {
    setMessageList(messageList.concat(
      {
        text: message,
        autor: sender,
      }));
  };

  const loadForBot = () => {
    setMessageList(messageList.concat(
      {
        text: 'thanks for yuor message:)',
        autor: 'bot'
      }))
  };


  const handleMessFormSubmit = event => {
    event.preventDefault();
    setIsTyping(false);
    loadMessage();
  };



  return (
    <div >
      <div className="container">
        <h1>Send message</h1>
      </div>


      <MessageList messageList={messageList} />
      <FormMessage handleMessFormSubmit={handleMessFormSubmit} setIsTyping={setIsTyping} message={message} sender={sender} setSender={setSender} setMessage={setMessage} />
    </div>


  );
};

export default App;
