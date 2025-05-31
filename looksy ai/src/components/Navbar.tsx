import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Search, 
  ChevronDown,
  MessageCircle 
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Link to="/" className="flex-shrink-0 flex items-center">
              <ShoppingBag className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-serif font-bold text-primary-600">Looksy</span>
            </Link>
            
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-primary-600 hover:text-primary-600">
                Home
              </Link>
              <div className="relative inline-block text-left group">
                <button className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-primary-600 hover:text-primary-600">
                  Shop
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="hidden group-hover:block absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Products</Link>
                    <Link to="/products/new" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">New Arrivals</Link>
                    <Link to="/products/trending" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Trending</Link>
                  </div>
                </div>
              </div>
              <Link to="/ai-stylist" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-primary-600 hover:text-primary-600">
                AI Stylist
              </Link>
              <Link to="/customization" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-primary-600 hover:text-primary-600">
                Customize
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <button 
              className="p-2 rounded-full text-gray-700 hover:text-primary-600"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>
            
            <Link to={isAuthenticated ? "/account" : "/login"} className="ml-4 p-2 rounded-full text-gray-700 hover:text-primary-600">
              <User size={20} />
            </Link>
            
            <Link to="/cart" className="ml-4 p-2 rounded-full text-gray-700 hover:text-primary-600 relative">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-primary-600 text-white text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
              Home
            </Link>
            <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
              Shop
            </Link>
            <Link to="/ai-stylist" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
              AI Stylist
            </Link>
            <Link to="/customization" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
              Customize
            </Link>
          </div>
        </div>
      )}
      
      {/* Search bar */}
      {isSearchOpen && (
        <div className="border-t border-gray-200 p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="input pr-10"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
 