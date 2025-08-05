import React from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingCart, Heart, ArrowLeft, Truck, Shield, Headphones, RotateCcw } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Product } from '../context/CartContext'

const Home: React.FC = () => {
  const { addToCart } = useCart()

  // Sample featured products
  const featuredProducts: Product[] = [
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
    }
  ]

  const categories = [
    {
      name: 'آرایش صورت',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
      path: '/products/makeup',
      count: 145
    },
    {
      name: 'مراقبت از پوست',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop',
      path: '/products/skincare',
      count: 89
    },
    {
      name: 'مراقبت از مو',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=300&fit=crop',
      path: '/products/haircare',
      count: 67
    },
    {
      name: 'عطر و ادکلن',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop',
      path: '/products/fragrance',
      count: 52
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                زیبایی شما، انتخاب ماست
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                بهترین محصولات آرایشی و بهداشتی از معتبرترین برندهای دنیا را با تخفیف‌های ویژه خریداری کنید
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  مشاهده محصولات
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link
                  to="/offers"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors text-center"
                >
                  تخفیف‌های ویژه
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop"
                alt="Beauty Products"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">۲۰٪</div>
                <div className="text-sm">تخفیف ویژه</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ارسال رایگان</h3>
              <p className="text-gray-600">برای خرید بالای ۵۰۰ هزار تومان</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ضمانت اصالت</h3>
              <p className="text-gray-600">تمامی محصولات اصل و معتبر</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">پشتیبانی ۲۴/۷</h3>
              <p className="text-gray-600">آماده پاسخگویی در تمام ساعات</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">بازگشت آسان</h3>
              <p className="text-gray-600">امکان بازگشت کالا تا ۷ روز</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">دسته‌بندی محصولات</h2>
            <p className="text-gray-600">از میان هزاران محصول، دسته مورد نظر خود را انتخاب کنید</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity"></div>
                <div className="absolute bottom-4 right-4 text-white">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count} محصول</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">محصولات پیشنهادی</h2>
            <p className="text-gray-600">بهترین و محبوب‌ترین محصولات آرایشی و بهداشتی</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.nameFa}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <button className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.nameFa}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="btn-primary inline-flex items-center gap-2"
            >
              مشاهده همه محصولات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">عضویت در خبرنامه</h2>
          <p className="text-xl mb-8 text-primary-100">
            از آخرین محصولات، تخفیف‌ها و اخبار زیبایی باخبر شوید
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-secondary-600 text-white px-6 py-3 rounded-lg hover:bg-secondary-700 transition-colors">
              عضویت
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home