import  { Link } from 'react-router-dom';
import { ShoppingBag, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <ShoppingBag className="h-6 w-6" />
              <span className="ml-2 text-xl font-serif font-bold">Looksy</span>
            </Link>
            <p className="mt-2 text-sm text-gray-300">
              Redefining fashion with AI-powered styling and customization.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/products/new" className="text-gray-300 hover:text-white text-sm">New Arrivals</Link></li>
              <li><Link to="/products/trending" className="text-gray-300 hover:text-white text-sm">Trending</Link></li>
              <li><Link to="/products/sale" className="text-gray-300 hover:text-white text-sm">Sale</Link></li>
              <li><Link to="/products/collections" className="text-gray-300 hover:text-white text-sm">Collections</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">AI Features</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/ai-stylist" className="text-gray-300 hover:text-white text-sm">Fashion Assistant</Link></li>
              <li><Link to="/customization" className="text-gray-300 hover:text-white text-sm">Customization Studio</Link></li>
              <li><Link to="/upload-outfit" className="text-gray-300 hover:text-white text-sm">Upload Your Look</Link></li>
              <li><Link to="/virtual-try-on" className="text-gray-300 hover:text-white text-sm">Virtual Try-On</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Help</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-white text-sm">Shipping Information</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white text-sm">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white text-sm">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Looksy Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
 