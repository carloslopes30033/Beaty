import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { itemCount } = useCart()
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const categories = [
    { name: 'آرایش صورت', nameFa: 'آرایش صورت', path: '/products/makeup' },
    { name: 'مراقبت از پوست', nameFa: 'مراقبت از پوست', path: '/products/skincare' },
    { name: 'مراقبت از مو', nameFa: 'مراقبت از مو', path: '/products/haircare' },
    { name: 'عطر و ادکلن', nameFa: 'عطر و ادکلن', path: '/products/fragrance' },
    { name: 'محصولات بهداشتی', nameFa: 'محصولات بهداشتی', path: '/products/hygiene' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span>🚚 ارسال رایگان برای خرید بالای ۵۰۰ هزار تومان</span>
            </div>
            <div className="flex items-center gap-4">
              <span>📞 ۰۲۱-۱۲۳۴۵۶۷۸</span>
              <span>💬 پشتیبانی ۲۴ ساعته</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ز</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">زیبایی شاپ</h1>
              <p className="text-xs text-gray-600">فروشگاه آرایشی و بهداشتی</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجوی محصولات..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Heart className="w-6 h-6" />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <User className="w-6 h-6" />
                {isAuthenticated && (
                  <span className="text-sm font-medium">{user?.name}</span>
                )}
              </button>

              {isUserMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {isAuthenticated ? (
                    <>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        پروفایل من
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        سفارشات من
                      </Link>
                      <hr className="my-2" />
                      <button
                        onClick={logout}
                        className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        خروج
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => navigate('/login')}
                        className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        ورود
                      </button>
                      <button
                        onClick={() => navigate('/register')}
                        className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        ثبت نام
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center gap-8 py-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                صفحه اصلی
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {category.nameFa}
                </Link>
              ))}
              <Link
                to="/brands"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                برندها
              </Link>
              <Link
                to="/offers"
                className="text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                تخفیف‌ها
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  صفحه اصلی
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="text-gray-700 hover:text-primary-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.nameFa}
                  </Link>
                ))}
                <Link
                  to="/brands"
                  className="text-gray-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  برندها
                </Link>
                <Link
                  to="/offers"
                  className="text-red-600 hover:text-red-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  تخفیف‌ها
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header