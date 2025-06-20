import {useState} from 'react';
import { Chatbot } from 'supersimpledev';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages);


    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  }
 
  return (
    <div className="chatbot">
      <input
        placeholder="Enter the message.."
        onChange={saveInputText}
        value={inputText}
      />
      <button onClick={sendMessage}
      >Send</button>
    </div>
  );
}
// export default ChatInput;