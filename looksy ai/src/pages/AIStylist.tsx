import  { useState } from 'react';
import { Upload, Mic, Camera, MessageCircle } from 'lucide-react';
import AIAssistant from '../components/AIAssistant';

export default function AIStylist() {
  const [selectedTab, setSelectedTab] = useState('chat');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-serif font-semibold mb-2">AI Fashion Assistant</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get personalized style advice, outfit recommendations, and fashion tips from our AI stylist.
        </p>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setSelectedTab('chat')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              selectedTab === 'chat' ? 'bg-white shadow-sm' : 'text-gray-600'
            }`}
          >
            Chat with Stylist
          </button>
          <button
            onClick={() => setSelectedTab('upload')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              selectedTab === 'upload' ? 'bg-white shadow-sm' : 'text-gray-600'
            }`}
          >
            Upload Photo
          </button>
          <button
            onClick={() => setSelectedTab('voice')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              selectedTab === 'voice' ? 'bg-white shadow-sm' : 'text-gray-600'
            }`}
          >
            Voice Input
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 lg:order-2">
          {selectedTab === 'chat' && (
            <AIAssistant />
          )}
          
          {selectedTab === 'upload' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-medium mb-4">Upload Your Look</h2>
              <p className="text-gray-600 mb-6">
                Upload a photo of yourself or an outfit you like, and our AI will suggest matching items or similar styles.
              </p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload size={40} className="mx-auto text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-4">
                  Drag and drop an image here, or click to browse
                </p>
                <input type="file" className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="btn btn-primary cursor-pointer">
                  Choose Image
                </label>
              </div>
            </div>
          )}
          
          {selectedTab === 'voice' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-medium mb-4">Voice Input</h2>
              <p className="text-gray-600 mb-6">
                Describe what you're looking for using your voice, and our AI will find matching outfits.
              </p>
              
              <div className="text-center py-12">
                <div className="h-20 w-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic size={32} className="text-primary-600" />
                </div>
                <button className="btn btn-primary px-6">
                  Start Speaking
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  Try saying: "Find me a casual outfit for a summer day"
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="lg:col-span-2 lg:order-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-medium mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <MessageCircle size={20} className="text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium">Chat with AI</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Ask questions about fashion trends, outfit ideas, or style advice.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <Camera size={20} className="text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium">Upload Photos</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Share images of outfits you like or your own photos for personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-700 mb-2">Popular Questions</h3>
              <ul className="space-y-2">
                <li>
                  <button className="text-primary-600 text-sm hover:underline text-left">
                    What should I wear to a summer wedding?
                  </button>
                </li>
                <li>
                  <button className="text-primary-600 text-sm hover:underline text-left">
                    How can I style a black dress for different occasions?
                  </button>
                </li>
                <li>
                  <button className="text-primary-600 text-sm hover:underline text-left">
                    What are the trending colors this season?
                  </button>
                </li>
                <li>
                  <button className="text-primary-600 text-sm hover:underline text-left">
                    How do I build a capsule wardrobe?
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 