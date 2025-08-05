import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Filter, Grid, List, Star, ShoppingCart, Heart, Search } from 'lucide-react'
import { useCart, Product } from '../context/CartContext'

const Products: React.FC = () => {
  const { category } = useParams()
  const { addToCart } = useCart()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('name')
  const [filterOpen, setFilterOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000000 })
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  // Sample products data
  const allProducts: Product[] = [
    {
      id: '1',
      name: 'L\'Oreal Paris Foundation',
      nameFa: 'کرم پودر لورآل پاریس',
      price: 450000,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop',
      category: 'makeup',
      brand: 'L\'Oreal',
      description: 'Long-lasting foundation with natural coverage',
      descriptionFa: 'کرم پودر با پوشش طبیعی و ماندگاری بالا',
      inStock: true,
      rating: 4.5,
      reviewCount: 128
    },
    {
      id: '2',
      name: 'Nivea Face Cream',
      nameFa: 'کرم مرطوب کننده نیوآ',
      price: 180000,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
      category: 'skincare',
      brand: 'Nivea',
      description: 'Moisturizing face cream for all skin types',
      descriptionFa: 'کرم مرطوب کننده صورت برای انواع پوست',
      inStock: true,
      rating: 4.2,
      reviewCount: 95
    },
    {
      id: '3',
      name: 'Pantene Shampoo',
      nameFa: 'شامپو پنتن',
      price: 120000,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop',
      category: 'haircare',
      brand: 'Pantene',
      description: 'Strengthening shampoo for damaged hair',
      descriptionFa: 'شامپو تقویت کننده برای موهای آسیب دیده',
      inStock: true,
      rating: 4.3,
      reviewCount: 76
    },
    {
      id: '4',
      name: 'Chanel Perfume',
      nameFa: 'عطر شانل',
      price: 2500000,
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
      category: 'fragrance',
      brand: 'Chanel',
      description: 'Luxury fragrance with floral notes',
      descriptionFa: 'عطر لوکس با رایحه گلی',
      inStock: true,
      rating: 4.8,
      reviewCount: 203
    },
    {
      id: '5',
      name: 'MAC Lipstick',
      nameFa: 'رژ لب مک',
      price: 380000,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop',
      category: 'makeup',
      brand: 'MAC',
      description: 'Matte lipstick with long-lasting color',
      descriptionFa: 'رژ لب مات با رنگ ماندگار',
      inStock: true,
      rating: 4.6,
      reviewCount: 89
    },
    {
      id: '6',
      name: 'Olay Night Cream',
      nameFa: 'کرم شب اولای',
      price: 220000,
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop',
      category: 'skincare',
      brand: 'Olay',
      description: 'Anti-aging night cream with retinol',
      descriptionFa: 'کرم ضد پیری شب با رتینول',
      inStock: true,
      rating: 4.4,
      reviewCount: 156
    }
  ]

  const categories = {
    makeup: 'آرایش صورت',
    skincare: 'مراقبت از پوست',
    haircare: 'مراقبت از مو',
    fragrance: 'عطر و ادکلن',
    hygiene: 'محصولات بهداشتی'
  }

  const brands = [...new Set(allProducts.map(p => p.brand))]

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = !category || product.category === category
    const matchesSearch = product.nameFa.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    
    return matchesCategory && matchesSearch && matchesPrice && matchesBrand
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'name':
      default:
        return a.nameFa.localeCompare(b.nameFa)
    }
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {category ? categories[category as keyof typeof categories] : 'همه محصولات'}
        </h1>
        <p className="text-gray-600">
          {filteredProducts.length} محصول یافت شد
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="جستجو در محصولات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">فیلترها</h3>
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="lg:hidden p-2 text-gray-600"
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>

            <div className={`space-y-6 ${filterOpen ? 'block' : 'hidden lg:block'}`}>
              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-3">محدوده قیمت</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="5000000"
                    step="50000"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{formatPrice(priceRange.min)}</span>
                    <span>{formatPrice(priceRange.max)}</span>
                  </div>
                </div>
              </div>

              {/* Brands */}
              <div>
                <h4 className="font-medium mb-3">برند</h4>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchTerm('')
                  setPriceRange({ min: 0, max: 5000000 })
                  setSelectedBrands([])
                }}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                پاک کردن فیلترها
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4">
          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="name">مرتب‌سازی بر اساس نام</option>
                <option value="price-low">قیمت: کم به زیاد</option>
                <option value="price-high">قیمت: زیاد به کم</option>
                <option value="rating">امتیاز</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Products */}
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">هیچ محصولی یافت نشد</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
            }>
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-48' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.nameFa}
                      className={`object-cover ${
                        viewMode === 'list' 
                          ? 'w-full h-32 rounded-r-lg' 
                          : 'w-full h-48 rounded-t-lg'
                      }`}
                    />
                    <button className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="p-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.nameFa}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviewCount})</span>
                    </div>
                    
                    {viewMode === 'list' && (
                      <p className="text-sm text-gray-600 mb-3">{product.descriptionFa}</p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary-600">
                        {formatPrice(product.price)}
                      </span>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {viewMode === 'list' && 'افزودن به سبد'}
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
  )
}

export default Products