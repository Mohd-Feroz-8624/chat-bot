// import Youtube from "./YouTube"
import { useState } from "react";
import {ChatInput} from './chatbot-components/ChatInput'
import  ChatMessages  from './chatbot-components/ChatMessages'
import './App.css';




function App() {
  const [chatMessages, setChatMessages] = useState([]);
  return (
    <div className="appContainer">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />

    </div>
  );
}

export default App
