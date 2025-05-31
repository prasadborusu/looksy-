import  { useState } from 'react';
import { Send, Mic, Camera, Image } from 'lucide-react';
import { cn } from '../lib/utils';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
};

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm your AI Fashion Assistant. How can I help you today? I can recommend outfits, help you customize clothing, or suggest items based on your photos.",
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That outfit would look great for a casual event! I recommend pairing it with minimal accessories for a clean look.",
        "Based on your style preferences, I think you'd love our new spring collection. Would you like to see some recommendations?",
        "For your body type, A-line dresses and high-waisted pants would create a balanced silhouette. Want to see some options?",
        "That color palette works beautifully together! The earth tones complement your skin tone perfectly.",
        "I've analyzed your photo and found similar items in our collection. Would you like me to show you matching accessories too?"
      ];
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        sender: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col h-[500px] max-h-[70vh]">
      <div className="px-4 py-3 border-b">
        <h3 className="text-lg font-semibold">AI Fashion Assistant</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={cn(
              "flex max-w-[80%] rounded-lg p-3",
              message.sender === 'user' 
                ? "ml-auto bg-primary-100 text-gray-800" 
                : "bg-gray-100 text-gray-800"
            )}
          >
            {message.content}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex items-center space-x-2 text-gray-500 bg-gray-100 w-fit p-3 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        )}
      </div>
      
      <div className="p-3 border-t">
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
            <Camera size={20} />
          </button>
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
            <Image size={20} />
          </button>
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
            <Mic size={20} />
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about styles, outfits, or upload a photo..."
            className="flex-1 py-2 px-3 border rounded-full focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
          
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className={cn(
              "p-2 rounded-full",
              input.trim() 
                ? "bg-primary-600 text-white" 
                : "bg-gray-200 text-gray-500"
            )}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
 