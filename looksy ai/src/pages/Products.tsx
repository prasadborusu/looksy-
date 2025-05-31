import  { useState } from 'react';
import { 
  ChevronDown, 
  Filter, 
  ShoppingBag, 
  Grid, 
  List
} from 'lucide-react';
import { mockProducts, categories } from '../lib/utils';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('newest');
  
  const filteredProducts = mockProducts.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-semibold mb-6">Shop All Products</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-64">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-3">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className={`text-sm ${!selectedCategory ? 'font-medium text-primary-600' : 'text-gray-600'}`}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button 
                      onClick={() => setSelectedCategory(category.id)}
                      className={`text-sm ${selectedCategory === category.id ? 'font-medium text-primary-600' : 'text-gray-600'}`}
                    >
                      {category.name} ({category.count})
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-3">Price Range</h2>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600">${priceRange[0]}</span>
                  <span className="text-sm text-gray-600">${priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium mb-3">Sizes</h2>
              <div className="grid grid-cols-4 gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button 
                    key={size}
                    className="border border-gray-300 rounded-md py-1 px-2 text-sm hover:border-primary-500 hover:bg-primary-50"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-600">
              Showing {sortedProducts.length} results
            </div>
            
            <div className="flex space-x-4 items-center">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <ChevronDown size={16} />
                </div>
              </div>
              
              <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1 rounded ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                >
                  <Grid size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1 rounded ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
          
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your filters to find what you're looking for.</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
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
          ) : (
            <div className="space-y-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="card flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-48">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      <p className="mt-1 text-gray-600 text-sm">{product.description}</p>
                      {product.category && (
                        <div className="mt-2">
                          <span className="inline-block bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                            {product.category}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <p className="font-semibold">${product.price.toFixed(2)}</p>
                      <button 
                        onClick={() => {/* Add to cart */}}
                        className="btn btn-primary py-1 px-3 text-sm flex items-center"
                      >
                        <ShoppingBag size={16} className="mr-1" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
 