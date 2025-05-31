import  { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import { useCart } from '../contexts/CartContext';

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
};

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm">
          <Heart size={18} className="text-gray-600 hover:text-red-500 cursor-pointer" />
        </div>
        
        {category && (
          <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-medium">
            {category}
          </div>
        )}
        
        <button 
          onClick={() => addToCart(id, 1)}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-primary-500 hover:text-white transition-colors duration-200"
        >
          <ShoppingBag size={18} />
        </button>
      </div>
      
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium text-gray-900 hover:text-primary-600 truncate">{name}</h3>
          <p className="mt-1 font-semibold text-gray-900">{formatPrice(price)}</p>
        </Link>
      </div>
    </div>
  );
}
 