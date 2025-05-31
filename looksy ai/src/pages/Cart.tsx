import  { Link } from 'react-router-dom';
import { Trash, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { mockProducts, formatPrice } from '../lib/utils';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <ShoppingBag size={32} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-serif font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any items yet.</p>
          <Link to="/products" className="btn btn-primary py-3 px-6">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-semibold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="text-lg font-medium">Items ({itemCount})</h2>
            </div>
            
            <ul className="divide-y divide-gray-200">
              {items.map((item) => {
                const product = mockProducts.find(p => p.id === item.id);
                if (!product) return null;
                
                return (
                  <li key={item.id} className="p-6 flex flex-col sm:flex-row">
                    <div className="sm:flex-shrink-0 w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    
                    <div className="sm:ml-6 flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-base font-medium">{product.name}</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.color && `Color: ${item.color}`}
                            {item.color && item.size && ' / '}
                            {item.size && `Size: ${item.size}`}
                          </p>
                        </div>
                        <p className="text-base font-medium">{formatPrice(product.price)}</p>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-2 text-gray-600 hover:text-gray-900"
                          >
                            -
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 text-gray-600 hover:text-gray-900"
                          >
                            +
                          </button>
                        </div>
                        
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <Trash size={18} />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className="mt-6 flex justify-between">
            <Link to="/products" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
              <X size={16} className="mr-1" /> Continue Shopping
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="border rounded-lg overflow-hidden bg-white sticky top-20">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="text-lg font-medium">Order Summary</h2>
            </div>
            
            <div className="px-6 py-4">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-medium">{formatPrice(total)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Shipping</p>
                  <p className="font-medium">{total >= 75 ? 'Free' : formatPrice(10)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Tax</p>
                  <p className="font-medium">{formatPrice(total * 0.08)}</p>
                </div>
                
                <div className="border-t pt-4 flex justify-between font-semibold">
                  <p>Total</p>
                  <p>{formatPrice(total + (total >= 75 ? 0 : 10) + total * 0.08)}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="w-full btn btn-primary py-3 flex items-center justify-center"
                >
                  Checkout <ArrowRight size={16} className="ml-2" />
                </Link>
                
                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>Secure checkout powered by Stripe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 