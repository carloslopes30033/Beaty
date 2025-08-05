import React from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart: React.FC = () => {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
  }

  const shippingCost = total > 500000 ? 0 : 50000
  const finalTotal = total + shippingCost

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">سبد خرید شما خالی است</h2>
          <p className="text-gray-600 mb-8">هنوز هیچ محصولی به سبد خرید اضافه نکرده‌اید</p>
          <Link
            to="/products"
            className="btn-primary inline-flex items-center gap-2"
          >
            شروع خرید
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">سبد خرید</h1>
        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          پاک کردن سبد
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            {items.map((item) => (
              <div key={item.id} className="p-6 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.nameFa}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{item.nameFa}</h3>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <p className="text-primary-600 font-medium mt-1">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="text-left mt-4">
                  <span className="text-lg font-semibold text-gray-800">
                    جمع: {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">خلاصه سفارش</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">جمع کل محصولات:</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">هزینه ارسال:</span>
                <span className="font-medium">
                  {shippingCost === 0 ? (
                    <span className="text-green-600">رایگان</span>
                  ) : (
                    formatPrice(shippingCost)
                  )}
                </span>
              </div>
              
              {total < 500000 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-700">
                    با خرید {formatPrice(500000 - total)} بیشتر، ارسال رایگان دریافت کنید!
                  </p>
                </div>
              )}
              
              <hr className="border-gray-200" />
              
              <div className="flex justify-between text-lg font-bold">
                <span>مجموع نهایی:</span>
                <span className="text-primary-600">{formatPrice(finalTotal)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full btn-primary text-center block mb-4"
            >
              ادامه خرید
            </Link>
            
            <Link
              to="/products"
              className="w-full text-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors block"
            >
              ادامه خرید محصولات
            </Link>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span>🔒</span>
                  <span>پرداخت امن</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>🚚</span>
                  <span>ارسال سریع</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart