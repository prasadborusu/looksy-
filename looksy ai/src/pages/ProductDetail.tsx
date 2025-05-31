import  { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  ShoppingBag, 
  Share, 
  ChevronRight, 
  Star, 
  Truck, 
  RefreshCw
} from 'lucide-react';
import { mockProducts, formatPrice } from '../lib/utils';
import { useCart } from '../contexts/CartContext';
import AIAssistant from '../components/AIAssistant';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors && product.colors.length > 0 ? product.colors[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
        <Link to="/products" className="mt-4 btn btn-primary inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity, selectedSize, selectedColor);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex text-sm">
          <li className="flex items-center">
            <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
          </li>
          <li className="flex items-center">
            <Link to="/products" className="text-gray-500 hover:text-primary-600">Products</Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
          </li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div>
          <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-gray-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-center object-cover" 
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-serif font-semibold">{product.name}</h1>
          
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  fill={i < 4 ? "currentColor" : "none"} 
                  className="text-yellow-400" 
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">4.0 (36 reviews)</span>
          </div>
          
          <div className="mt-4">
            <h2 className="sr-only">Product information</h2>
            <p className="text-2xl font-medium text-gray-900">{formatPrice(product.price)}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <div className="mt-2 text-base text-gray-700 space-y-2">
              <p>{product.description}</p>
              <p>
                AI-Generated Style Caption: This versatile piece exudes sophistication with clean lines and impeccable tailoring. Perfect for elevating your wardrobe with timeless elegance.
              </p>
            </div>
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <div className="mt-2 flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-8 w-8 rounded-full flex items-center justify-center border ${
                      selectedColor === color 
                        ? 'ring-2 ring-primary-500 ring-offset-1' 
                        : 'ring-1 ring-gray-200'
                    }`}
                  >
                    <span className="sr-only">{color}</span>
                    <span
                      className="h-6 w-6 rounded-full"
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <Link to="/size-guide" className="text-sm font-medium text-primary-600 hover:text-primary-500">
                  Size guide
                </Link>
              </div>
              <div className="mt-2 grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 text-sm font-medium rounded-md ${
                      selectedSize === size
                        ? 'bg-primary-600 text-white'
                        : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <div className="flex items-center">
              <h3 className="text-sm font-medium text-gray-900 mr-3">Quantity</h3>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 btn btn-primary py-3 flex items-center justify-center"
            >
              <ShoppingBag size={20} className="mr-2" />
              Add to Cart
            </button>
            <button
              type="button"
              className="p-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Heart size={20} />
            </button>
            <button
              type="button"
              className="p-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Share size={20} />
            </button>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <button 
              onClick={() => setShowAIAssistant(!showAIAssistant)}
              className="w-full btn btn-secondary py-3 flex items-center justify-center"
            >
              <MessageCircle size={20} className="mr-2" />
              {showAIAssistant ? "Hide AI Stylist" : "Ask AI Stylist About This Item"}
            </button>

            {showAIAssistant && (
              <div className="mt-4">
                <AIAssistant />
              </div>
            )}
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 space-y-4">
            <div className="flex items-center">
              <Truck size={20} className="text-gray-600 mr-3" />
              <span className="text-sm text-gray-700">Free shipping on orders over $75</span>
            </div>
            <div className="flex items-center">
              <RefreshCw size={20} className="text-gray-600 mr-3" />
              <span className="text-sm text-gray-700">Free returns within 30 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 