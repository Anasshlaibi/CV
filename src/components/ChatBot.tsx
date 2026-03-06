/// <reference types="vite/client" />
import React, { useState, useRef, useEffect } from 'react';


export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Anass's AI Twin. Ask me about my marketing projects at Sup'RH or my work with Verdanov!", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMsg, history: messages.filter(msg => msg.isBot || msg.text !== userMsg).map(msg => ({
          role: msg.isBot ? 'model' : 'user',
          parts: [{ text: msg.text }],
        }))}),
      });

      const data = await response.json();
      if (response.ok) {
        setMessages(prev => [...prev, { text: data.text, isBot: true }]);
      } else {
        throw new Error(data.error || 'Unknown error from backend.');
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { text: "Connection error. Check the @.env file!", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col">
          {/* Chatbot Header */}
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Anass's AI Twin</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close Chatbot"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Display */}
          <div className="flex-1 p-3 overflow-y-auto" ref={scrollRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-2 ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[70%] p-2 rounded-lg ${msg.isBot ? 'bg-gray-200 text-black' : 'bg-blue-500 text-white'}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-2">
                <div className="max-w-[70%] p-2 rounded-lg bg-gray-200 text-black">
                  ...
                </div>
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              className="flex-1 border rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};