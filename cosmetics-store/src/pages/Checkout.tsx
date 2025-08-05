import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CreditCard, Truck, MapPin, Phone, Mail, CheckCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const Checkout: React.FC = () => {
  const { items, total, clearCart } = useCart()
  const { user, isAuthenticated } = useAuth()
  const [step, setStep] = useState(1)
  const [orderComplete, setOrderComplete] = useState(false)
  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: user?.name.split(' ')[0] || '',
    lastName: user?.name.split(' ')[1] || '',
    phone: user?.phone || '',
    email: user?.email || '',
    address: '',
    city: 'تهران',
    postalCode: '',
    notes: ''
  })

  const [paymentMethod, setPaymentMethod] = useState('card')

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
  }

  const shippingCost = total > 500000 ? 0 : 50000
  const finalTotal = total + shippingCost

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitOrder = () => {
    // Simulate order processing
    setTimeout(() => {
      setOrderComplete(true)
      clearCart()
    }, 2000)
  }

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">سبد خرید شما خالی است</h2>
          <Link to="/products" className="btn-primary">
            بازگشت به فروشگاه
          </Link>
        </div>
      </div>
    )
  }

  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">سفارش شما با موفقیت ثبت شد!</h2>
          <p className="text-gray-600 mb-6">
            شماره سفارش: <span className="font-bold">#12345</span>
          </p>
          <p className="text-gray-600 mb-8">
            سفارش شما در حال پردازش است و به زودی ارسال خواهد شد.
          </p>
          <div className="space-y-4">
            <Link to="/orders" className="btn-primary w-full block text-center">
              مشاهده سفارشات من
            </Link>
            <Link to="/" className="w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors block text-center">
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">تکمیل خرید</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              1
            </div>
            <span className="mr-2 text-sm">اطلاعات ارسال</span>
          </div>
          <div className="w-16 h-px bg-gray-300 mx-4"></div>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              2
            </div>
            <span className="mr-2 text-sm">روش پرداخت</span>
          </div>
          <div className="w-16 h-px bg-gray-300 mx-4"></div>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              3
            </div>
            <span className="mr-2 text-sm">تایید نهایی</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  اطلاعات ارسال
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نام *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={shippingInfo.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={shippingInfo.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      شماره تلفن *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    آدرس کامل *
                  </label>
                  <textarea
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      شهر *
                    </label>
                    <select
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="تهران">تهران</option>
                      <option value="اصفهان">اصفهان</option>
                      <option value="مشهد">مشهد</option>
                      <option value="شیراز">شیراز</option>
                      <option value="تبریز">تبریز</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      کد پستی *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    توضیحات اضافی
                  </label>
                  <textarea
                    name="notes"
                    value={shippingInfo.notes}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="توضیحات برای پیک..."
                  />
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="btn-primary w-full"
                >
                  ادامه
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  روش پرداخت
                </h2>

                <div className="space-y-4 mb-6">
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="ml-3"
                    />
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-primary-600" />
                      <div>
                        <div className="font-medium">پرداخت آنلاین</div>
                        <div className="text-sm text-gray-600">پرداخت امن با کارت بانکی</div>
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="ml-3"
                    />
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-primary-600" />
                      <div>
                        <div className="font-medium">پرداخت در محل</div>
                        <div className="text-sm text-gray-600">پرداخت نقدی هنگام تحویل</div>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    بازگشت
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 btn-primary"
                  >
                    ادامه
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">تایید نهایی سفارش</h2>

                <div className="space-y-4 mb-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-medium mb-2">اطلاعات ارسال:</h3>
                    <p className="text-sm text-gray-600">
                      {shippingInfo.firstName} {shippingInfo.lastName}<br />
                      {shippingInfo.phone}<br />
                      {shippingInfo.address}<br />
                      {shippingInfo.city} - {shippingInfo.postalCode}
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-medium mb-2">روش پرداخت:</h3>
                    <p className="text-sm text-gray-600">
                      {paymentMethod === 'card' ? 'پرداخت آنلاین' : 'پرداخت در محل'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    بازگشت
                  </button>
                  <button
                    onClick={handleSubmitOrder}
                    className="flex-1 btn-primary"
                  >
                    ثبت سفارش
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">خلاصه سفارش</h3>
              
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.nameFa}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.nameFa}</h4>
                      <p className="text-xs text-gray-600">تعداد: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <hr className="mb-4" />

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>جمع محصولات:</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>هزینه ارسال:</span>
                  <span>
                    {shippingCost === 0 ? (
                      <span className="text-green-600">رایگان</span>
                    ) : (
                      formatPrice(shippingCost)
                    )}
                  </span>
                </div>
              </div>

              <hr className="mb-4" />

              <div className="flex justify-between text-lg font-bold">
                <span>مجموع نهایی:</span>
                <span className="text-primary-600">{formatPrice(finalTotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout