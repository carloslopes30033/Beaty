import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">عضویت در خبرنامه</h3>
              <p className="text-primary-100">از جدیدترین محصولات و تخفیف‌ها باخبر شوید</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 md:w-80 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Send className="w-4 h-4" />
                عضویت
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ز</span>
              </div>
              <h3 className="text-xl font-bold">زیبایی شاپ</h3>
            </div>
            <p className="text-gray-300 mb-4">
              فروشگاه آنلاین محصولات آرایشی و بهداشتی با بیش از ۱۰ سال تجربه در ارائه بهترین برندهای داخلی و خارجی
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                  فرصت‌های شغلی
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدمات مشتریان</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  راهنمای خرید
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors">
                  بازگشت کالا
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-white transition-colors">
                  گارانتی محصولات
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  قوانین و مقررات
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">اطلاعات تماس</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">info@zibayishop.ir</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-1" />
                <span className="text-gray-300">
                  تهران، خیابان ولیعصر، پلاک ۱۲۳، طبقه ۲
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">نمادهای اعتماد</h5>
              <div className="flex gap-2">
                <div className="w-12 h-12 bg-gray-800 rounded border border-gray-700 flex items-center justify-center">
                  <span className="text-xs text-center">نماد اعتماد</span>
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded border border-gray-700 flex items-center justify-center">
                  <span className="text-xs text-center">ساماندهی</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © ۱۴۰۳ زیبایی شاپ. تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>💳 پرداخت امن</span>
              <span>🚚 ارسال سریع</span>
              <span>🔄 ضمانت بازگشت</span>
              <span>☎️ پشتیبانی ۲۴/۷</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer