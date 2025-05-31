import  { ArrowRight, Camera, MessageCircle, ShoppingBag, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import AIAssistant from '../components/AIAssistant';
import { mockProducts, categories } from '../lib/utils';

export default function Home() {
  const featuredProducts = mockProducts.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80" 
          alt="Fashion model with shopping bags" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        
        <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
              Discover Your Style with AI
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Shop the latest trends and create custom outfits with our AI-powered fashion assistant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn btn-primary py-3 px-6">
                Shop Now
              </Link>
              <Link to="/ai-stylist" className="btn bg-white text-gray-900 hover:bg-gray-100 py-3 px-6">
                Try AI Stylist
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-semibold">Shop by Category</h2>
            <p className="mt-2 text-gray-600">Explore our curated collections</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/products/${category.id}`}
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 text-center">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{category.count} items</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-serif font-semibold">Trending Now</h2>
              <p className="mt-2 text-gray-600">Our most popular products this season</p>
            </div>
            <Link to="/products" className="text-primary-600 font-medium flex items-center hover:text-primary-700">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 3).map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Features Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-fashion-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold">AI-Powered Fashion</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Experience the future of fashion with our cutting-edge AI technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">AI Fashion Assistant</h3>
              <p className="text-gray-600 mb-4">
                Get personalized style advice and outfit recommendations.
              </p>
              <Link to="/ai-stylist" className="text-primary-600 font-medium hover:text-primary-700">
                Chat with Stylist
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Custom Clothing</h3>
              <p className="text-gray-600 mb-4">
                Design your own clothes with our AI-powered customization tool.
              </p>
              <Link to="/customization" className="text-primary-600 font-medium hover:text-primary-700">
                Start Designing
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Photo Match</h3>
              <p className="text-gray-600 mb-4">
                Upload a photo and find matching or complementary outfits.
              </p>
              <Link to="/upload-outfit" className="text-primary-600 font-medium hover:text-primary-700">
                Upload Photo
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Assistant Demo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-4">
                Your Personal AI Stylist
              </h2>
              <p className="text-gray-600 mb-6">
                Meet your new fashion bestie. Our AI assistant helps you discover your style, find perfect outfits, and stay on trend.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <Check size={14} className="text-primary-600" />
                  </div>
                  <span className="ml-2 text-gray-600">Get outfit recommendations based on your style</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <Check size={14} className="text-primary-600" />
                  </div>
                  <span className="ml-2 text-gray-600">Upload photos for instant outfit matching</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <Check size={14} className="text-primary-600" />
                  </div>
                  <span className="ml-2 text-gray-600">Customize clothing with text prompts</span>
                </li>
              </ul>
              <Link to="/ai-stylist" className="btn btn-primary">
                Try It Now
              </Link>
            </div>
            
            <div>
              <AIAssistant />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 