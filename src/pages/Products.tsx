import { useState } from "react";
import { Search, Filter, ShoppingCart, Star, Heart, Eye, Package, IndianRupee, Grid, List } from "lucide-react";
import Navbar from "../components/Navbar";

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'fashion', name: 'Fashion', icon: '👔' },
    { id: 'health', name: 'Health', icon: '💊' },
    { id: 'beauty', name: 'Beauty', icon: '💄' },
    { id: 'home', name: 'Home & Living', icon: '🏠' }
  ];

  const products = [
    {
      id: 1,
      name: "Smart Watch Pro",
      category: "electronics",
      price: 8999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300",
      rating: 4.5,
      reviews: 234,
      badge: "New",
      description: "Advanced fitness tracking with heart rate monitor and GPS",
      inStock: true,
      discount: 31
    },
    {
      id: 2,
      name: "Analog Classic Watch",
      category: "fashion", 
      price: 4999,
      originalPrice: 7999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      rating: 4.3,
      reviews: 156,
      badge: "Popular",
      description: "Timeless elegance with premium leather strap",
      inStock: true,
      discount: 38
    },
    {
      id: 3,
      name: "Premium Perfume Set",
      category: "beauty",
      price: 2999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-15946318931b8b5a760511846?w=300",
      rating: 4.7,
      reviews: 412,
      badge: "Best Seller",
      description: "Luxury fragrance collection for men and women",
      inStock: true,
      discount: 40
    },
    {
      id: 4,
      name: "Loreal Paris Skincare",
      category: "beauty",
      price: 1899,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1596462502278-27d035a59034?w=300",
      rating: 4.6,
      reviews: 523,
      badge: "Trending",
      description: "Complete anti-aging skincare solution",
      inStock: true,
      discount: 37
    },
    {
      id: 5,
      name: "CSC Protein Powder",
      category: "health",
      price: 2499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
      rating: 4.4,
      reviews: 189,
      badge: "New",
      description: "Premium whey protein for muscle building",
      inStock: true,
      discount: 38
    },
    {
      id: 6,
      name: "Package Starter Kit",
      category: "home",
      price: 5999,
      originalPrice: 8999,
      image: "https://images.unsplash.com/photo-1603796826162-b6b3b955b2c1?w=300",
      rating: 4.8,
      reviews: 667,
      badge: "Hot Deal",
      description: "Complete home organization solution",
      inStock: true,
      discount: 33
    },
    {
      id: 7,
      name: "Wireless Earbuds",
      category: "electronics",
      price: 3499,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
      rating: 4.5,
      reviews: 892,
      badge: "Popular",
      description: "Premium sound quality with noise cancellation",
      inStock: true,
      discount: 42
    },
    {
      id: 8,
      name: "Designer Handbag",
      category: "fashion",
      price: 7999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300",
      rating: 4.7,
      reviews: 234,
      badge: "Luxury",
      description: "Genuine leather designer handbag collection",
      inStock: false,
      discount: 38
    },
    {
      id: 9,
      name: "Vitamin C Serum",
      category: "beauty",
      price: 1299,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1612810280036-553e00db1c3f?w=300",
      rating: 4.6,
      reviews: 445,
      badge: "New",
      description: "Brightening vitamin C face serum",
      inStock: true,
      discount: 35
    },
    {
      id: 10,
      name: "Smart Home Speaker",
      category: "electronics",
      price: 4999,
      originalPrice: 7999,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300",
      rating: 4.4,
      reviews: 178,
      badge: "Smart",
      description: "AI-powered voice assistant speaker",
      inStock: true,
      discount: 38
    },
    {
      id: 11,
      name: "Yoga Mat Premium",
      category: "health",
      price: 1499,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=300",
      rating: 4.8,
      reviews: 334,
      badge: "Eco-Friendly",
      description: "Non-slip premium yoga mat with carrying strap",
      inStock: true,
      discount: 40
    },
    {
      id: 12,
      name: "Kitchen Appliance Set",
      category: "home",
      price: 8999,
      originalPrice: 14999,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
      rating: 4.5,
      reviews: 223,
      badge: "Bundle",
      description: "Complete kitchen appliance starter pack",
      inStock: true,
      discount: 40
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'New': return 'bg-green-500';
      case 'Popular': return 'bg-blue-500';
      case 'Best Seller': return 'bg-orange-500';
      case 'Trending': return 'bg-purple-500';
      case 'Hot Deal': return 'bg-red-500';
      case 'Luxury': return 'bg-yellow-500';
      case 'Smart': return 'bg-cyan-500';
      case 'Eco-Friendly': return 'bg-emerald-500';
      case 'Bundle': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Categories */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background hover:border-primary/50'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Header */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="font-heading text-xl font-bold text-foreground">
                {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
              </h1>
              <span className="text-sm text-muted-foreground">
                ({filteredProducts.length} products found)
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`rounded-lg p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`rounded-lg p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <main className="container mx-auto px-4 py-8">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all">
                {/* Product Badge */}
                {product.badge && (
                  <div className={`absolute top-2 left-2 z-10 rounded-full px-2 py-1 text-xs font-medium text-white ${getBadgeColor(product.badge)}`}>
                    {product.badge}
                  </div>
                )}
                
                {/* Product Image */}
                <div className="relative aspect-square bg-muted flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300'; // fallback image
                    }}
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <span className="text-white font-medium">Out of Stock</span>
                    </div>
                  )}
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <h3 className="mb-2 font-heading text-sm font-semibold text-foreground line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <p className="mb-3 text-xs text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-heading text-lg font-bold text-foreground">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">
                      -{product.discount}%
                    </span>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed" 
                            disabled={!product.inStock}>
                      <ShoppingCart className="mr-1 h-3 w-3 inline" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button className="rounded-lg border border-border bg-muted p-2 hover:bg-muted/80">
                      <Heart className="h-3 w-3" />
                    </button>
                    <button className="rounded-lg border border-border bg-muted p-2 hover:bg-muted/80">
                      <Eye className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="relative h-24 w-24 flex-shrink-0 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300'; // fallback image
                      }}
                    />
                    {product.badge && (
                      <div className={`absolute top-1 left-1 rounded-full px-1 py-0.5 text-xs font-medium text-white ${getBadgeColor(product.badge)}`}>
                        {product.badge}
                      </div>
                    )}
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-base font-semibold text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {product.description}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <div className="mb-1 flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-lg font-bold text-foreground">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed" 
                              disabled={!product.inStock}>
                        <ShoppingCart className="mr-1 h-3 w-3 inline" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                      <button className="rounded-lg border border-border bg-muted p-2 hover:bg-muted/80">
                        <Heart className="h-3 w-3" />
                      </button>
                      <button className="rounded-lg border border-border bg-muted p-2 hover:bg-muted/80">
                        <Eye className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Jample Life. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
