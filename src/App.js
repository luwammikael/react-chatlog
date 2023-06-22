import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  // console.log(chatMessages)
  const [newChatMessages, setNewChatMessages] = useState(chatMessages)
  const createNewMessage = (updatedMessage) =>{
    const newChatData = newChatMessages.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else { return message;}
    });
    setNewChatMessages(newChatData)
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        
        <ChatLog
        entries={newChatMessages}
        updatedMessage={createNewMessage}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
