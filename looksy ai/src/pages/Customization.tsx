import  CustomizationTool from '../components/CustomizationTool';
import { Sparkles, Check } from 'lucide-react';

export default function Customization() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-fashion-beige opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            AI-Powered Clothing Customization
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Design your dream outfit with our AI technology. From concept to creation, bring your fashion ideas to life.
          </p>
          <div className="inline-flex items-center justify-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-700">
            <Sparkles size={16} className="text-primary-600 mr-2" />
            Powered by advanced AI image generation
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <CustomizationTool />
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h2 className="text-xl font-medium mb-4">Customization Guide</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-medium">Tips for Great Results</h3>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start">
                        <Check size={16} className="mt-0.5 mr-2 text-primary-600" />
                        <span className="text-sm">Be specific about colors, patterns, and materials</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="mt-0.5 mr-2 text-primary-600" />
                        <span className="text-sm">Mention the style (casual, formal, bohemian, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="mt-0.5 mr-2 text-primary-600" />
                        <span className="text-sm">Include details about fit and silhouette</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="mt-0.5 mr-2 text-primary-600" />
                        <span className="text-sm">Specify occasion (wedding, office, everyday, etc.)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Example Prompts</h3>
                    <div className="mt-2 space-y-2">
                      <div className="bg-gray-50 p-2 rounded text-sm">
                        "A floral summer dress with puff sleeves and a midi length"
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-sm">
                        "Minimalist black blazer with gold button details for office wear"
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-sm">
                        "Bohemian maxi skirt with embroidered details in earth tones"
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-medium mb-2">How It Works</h3>
                  <ol className="space-y-3 text-sm">
                    <li className="flex">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 text-primary-700 text-xs font-medium">1</span>
                      <span>Describe your ideal clothing item or outfit</span>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 text-primary-700 text-xs font-medium">2</span>
                      <span>Our AI generates design options based on your description</span>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 text-primary-700 text-xs font-medium">3</span>
                      <span>Refine your design with additional prompts</span>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 text-primary-700 text-xs font-medium">4</span>
                      <span>Add your custom design to cart for production</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-semibold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2">How long does production take?</h3>
              <p className="text-sm text-gray-600">Custom designs typically take 2-3 weeks for production plus shipping time.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2">Can I make adjustments to the design?</h3>
              <p className="text-sm text-gray-600">Yes, you can refine your design with additional prompts before finalizing your order.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2">What if I'm not satisfied with the result?</h3>
              <p className="text-sm text-gray-600">We offer a satisfaction guarantee. If you're not happy with your custom item, contact us within 14 days.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2">Can I customize existing products?</h3>
              <p className="text-sm text-gray-600">Yes! You can either create something completely new or customize our existing catalog items.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 