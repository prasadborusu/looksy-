import  { useState } from 'react';
import { Send, RefreshCw } from 'lucide-react';

type GeneratedDesign = {
  id: string;
  imageUrl: string;
  prompt: string;
};

export default function CustomizationTool() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesigns, setGeneratedDesigns] = useState<GeneratedDesign[]>([]);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      // Placeholder designs
      const designs: GeneratedDesign[] = [
        {
          id: '1',
          imageUrl: 'https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
          prompt
        },
        {
          id: '2',
          imageUrl: 'https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
          prompt
        },
        {
          id: '3',
          imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
          prompt
        }
      ];
      
      setGeneratedDesigns(designs);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-serif font-semibold mb-4">Clothing Customization Studio</h2>
      <p className="text-gray-600 mb-6">Describe your dream outfit and let our AI bring it to life.</p>
      
      <div className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., Design a red lehenga with mirror work"
            className="input flex-1 rounded-r-none"
          />
          <button 
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="btn btn-primary rounded-l-none flex items-center"
          >
            {isGenerating ? <RefreshCw size={18} className="animate-spin mr-2" /> : <Send size={18} className="mr-2" />}
            {isGenerating ? 'Generating...' : 'Generate'}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Try to be specific about colors, patterns, style, and occasion.
        </p>
      </div>
      
      {isGenerating && (
        <div className="h-80 flex items-center justify-center">
          <div className="loader" />
        </div>
      )}
      
      {!isGenerating && generatedDesigns.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-3">Generated Designs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {generatedDesigns.map((design) => (
              <div key={design.id} className="border rounded-lg overflow-hidden">
                <img 
                  src={design.imageUrl} 
                  alt={`AI-generated design based on: ${design.prompt}`}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-3">
                  <p className="text-sm text-gray-600 truncate">{design.prompt}</p>
                  <div className="mt-2 flex space-x-2">
                    <button className="btn btn-secondary text-xs py-1">Refine</button>
                    <button className="btn btn-accent text-xs py-1">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
 