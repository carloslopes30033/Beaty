import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, Share2 } from 'lucide-react'
import { useCart, Product } from '../context/CartContext'

const ProductDetail: React.FC = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  // Sample product data - in a real app, this would be fetched based on the ID
  const product: Product = {
    id: id || '1',
    name: 'L\'Oreal Paris Foundation',
    nameFa: 'کرم پودر لورآل پاریس مدل True Match',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop',
    category: 'makeup',
    brand: 'L\'Oreal',
    description: 'Long-lasting foundation with natural coverage that matches your skin tone perfectly. SPF 17 protection.',
    descriptionFa: 'کرم پودر با پوشش طبیعی و ماندگاری بالا که کاملاً با رنگ پوست شما هماهنگ می‌شود. دارای ضد آفتاب SPF 17',
    inStock: true,
    rating: 4.5,
    reviewCount: 128
  }

  const productImages = [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1631214540242-3c0a2e6e5e4e?w=600&h=600&fit=crop'
  ]

  const reviews = [
    {
      id: 1,
      name: 'سارا احمدی',
      rating: 5,
      date: '۱۴۰۳/۰۲/۱۵',
      comment: 'محصول فوق‌العاده‌ای است. پوشش عالی و ماندگاری بسیار خوب. قطعاً دوباره خریداری می‌کنم.'
    },
    {
      id: 2,
      name: 'مریم رضایی',
      rating: 4,
      date: '۱۴۰۳/۰۲/۱۰',
      comment: 'کیفیت خوبی دارد اما رنگ‌بندی بیشتری می‌تواند داشته باشد.'
    },
    {
      id: 3,
      name: 'نگار کریمی',
      rating: 5,
      date: '۱۴۰۳/۰۲/۰۵',
      comment: 'عاشق این محصولم! خیلی طبیعی روی پوست می‌نشیند و احساس سنگینی نمی‌دهد.'
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li><Link to="/" className="hover:text-primary-600">خانه</Link></li>
          <li>/</li>
          <li><Link to="/products" className="hover:text-primary-600">محصولات</Link></li>
          <li>/</li>
          <li><Link to={`/products/${product.category}`} className="hover:text-primary-600">آرایش صورت</Link></li>
          <li>/</li>
          <li className="text-gray-800">{product.nameFa}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img
              src={productImages[selectedImage]}
              alt={product.nameFa}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'border-primary-600' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.nameFa} ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.nameFa}</h1>
            <p className="text-gray-600 mb-4">{product.brand}</p>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 mr-2">
                  {product.rating} ({product.reviewCount} نظر)
                </span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-primary-600">
                {formatPrice(product.price)}
              </span>
            </div>

            <p className="text-gray-700 mb-6">{product.descriptionFa}</p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <label className="font-medium">تعداد:</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                افزودن به سبد خرید
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary-600" />
                <span className="text-sm">ارسال رایگان</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-600" />
                <span className="text-sm">ضمانت اصالت</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-primary-600" />
                <span className="text-sm">بازگشت آسان</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-2 border-b-2 font-medium ${
                activeTab === 'description'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              توضیحات
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`py-4 px-2 border-b-2 font-medium ${
                activeTab === 'specifications'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              مشخصات
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-2 border-b-2 font-medium ${
                activeTab === 'reviews'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              نظرات ({product.reviewCount})
            </button>
          </nav>
        </div>

        <div className="py-8">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {product.descriptionFa}
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-4">ویژگی‌های محصول:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>پوشش طبیعی و یکنواخت</li>
                <li>ماندگاری بالا تا ۲۴ ساعت</li>
                <li>حاوی ضد آفتاب SPF 17</li>
                <li>مناسب برای انواع پوست</li>
                <li>بافت سبک و قابل ترکیب</li>
              </ul>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">مشخصات کلی</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">برند:</span>
                    <span className="font-medium">{product.brand}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">دسته‌بندی:</span>
                    <span className="font-medium">آرایش صورت</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">نوع پوست:</span>
                    <span className="font-medium">همه انواع پوست</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">حجم:</span>
                    <span className="font-medium">۳۰ میلی‌لیتر</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">ویژگی‌های خاص</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">ضد آفتاب:</span>
                    <span className="font-medium">SPF 17</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">ماندگاری:</span>
                    <span className="font-medium">۲۴ ساعت</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">نوع پوشش:</span>
                    <span className="font-medium">متوسط تا کامل</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">کشور سازنده:</span>
                    <span className="font-medium">فرانسه</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-bold text-primary-600">{product.rating}</div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">{product.reviewCount} نظر</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{review.name}</h4>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail