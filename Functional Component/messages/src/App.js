import React, { useState } from 'react';
import MessageDisplay from './components/MessageDisaplay';
import MessageForm from './components/MessageForm';

function App() {
  const [currentMsg, setCurrentMessage] = useState("There are no messages");

  const youveGotMail =  ( newMessage ) => {
    setCurrentMessage(newMessage);
  }
  return (
    <>
      <MessageForm onNewMessage={ youveGotMail }/>
      <MessageDisplay message= { currentMsg} />
    </>
  );
}

export default App;
