# فروشگاه آرایشی و بهداشتی زیبایی شاپ
# Cosmetics & Health Products Store - Zibayee Shop

یک فروشگاه آنلاین مدرن و کاربرپسند برای فروش محصولات آرایشی و بهداشتی در ایران

A modern and user-friendly online store for selling cosmetics and health products in Iran.

## ویژگی‌ها / Features

### 🌟 ویژگی‌های اصلی / Main Features
- **صفحه اصلی جذاب** با معرفی محصولات پیشنهادی و دسته‌بندی‌ها
- **کاتالوگ محصولات** با قابلیت فیلتر، جستجو و مرتب‌سازی
- **صفحه جزئیات محصول** با گالری تصاویر، نظرات و مشخصات کامل
- **سبد خرید پیشرفته** با مدیریت تعداد و محاسبه هزینه‌ها
- **فرآیند خرید ساده** با روش‌های پرداخت ایرانی
- **طراحی واکنش‌گرا** برای همه دستگاه‌ها

### 🎨 طراحی و رابط کاربری / Design & UI
- **پشتیبانی کامل از زبان فارسی** و چیدمان راست به چپ (RTL)
- **فونت فارسی زیبا** (Vazirmatn) برای خوانایی بهتر
- **رنگ‌بندی مناسب** با تم بنفش و سبز
- **آیکون‌های مدرن** از Lucide React
- **انیمیشن‌های روان** و تعاملات کاربری

### 🛍️ قابلیت‌های فروشگاهی / E-commerce Features
- **دسته‌بندی محصولات**: آرایش صورت، مراقبت از پوست، مراقبت از مو، عطر و ادکلن
- **فیلتر پیشرفته**: بر اساس قیمت، برند، امتیاز
- **سیستم امتیازدهی** و نظرات کاربران
- **محاسبه هزینه ارسال** (رایگان برای خرید بالای ۵۰۰ هزار تومان)
- **روش‌های پرداخت**: آنلاین و پرداخت در محل

## تکنولوژی‌ها / Technologies

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Context API** for state management
- **Lucide React** for icons
- **Persian/Farsi** localization support

## نصب و راه‌اندازی / Installation & Setup

### پیش‌نیازها / Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### مراحل نصب / Installation Steps

1. **کلون کردن پروژه / Clone the project**
```bash
git clone <repository-url>
cd cosmetics-store
```

2. **نصب وابستگی‌ها / Install dependencies**
```bash
npm install
```

3. **اجرای پروژه در حالت توسعه / Run development server**
```bash
npm run dev
```

4. **ساخت نسخه تولید / Build for production**
```bash
npm run build
```

5. **پیش‌نمایش نسخه تولید / Preview production build**
```bash
npm run preview
```

## ساختار پروژه / Project Structure

```
src/
├── components/          # کامپوننت‌های قابل استفاده مجدد
│   ├── Header.tsx      # هدر و منوی اصلی
│   └── Footer.tsx      # فوتر سایت
├── pages/              # صفحات اصلی
│   ├── Home.tsx        # صفحه اصلی
│   ├── Products.tsx    # فهرست محصولات
│   ├── ProductDetail.tsx # جزئیات محصول
│   ├── Cart.tsx        # سبد خرید
│   └── Checkout.tsx    # صفحه خرید
├── context/            # مدیریت state
│   ├── CartContext.tsx # مدیریت سبد خرید
│   └── AuthContext.tsx # مدیریت کاربران
├── App.tsx             # کامپوننت اصلی
└── main.tsx           # نقطه ورود برنامه
```

## محصولات نمونه / Sample Products

فروشگاه شامل محصولات نمونه از برندهای معتبر:
- **آرایش صورت**: کرم پودر لورآل، رژ لب مک
- **مراقبت از پوست**: کرم نیوآ، کرم شب اولای
- **مراقبت از مو**: شامپو پنتن
- **عطر و ادکلن**: عطر شانل

## ویژگی‌های آینده / Future Features

- [ ] سیستم ورود و ثبت نام کاربران
- [ ] پنل مدیریت محصولات
- [ ] سیستم کوپن تخفیف
- [ ] پیگیری سفارشات
- [ ] نظرات و امتیازدهی کاربران
- [ ] مقایسه محصولات
- [ ] لیست علاقه‌مندی‌ها

## مشارکت / Contributing

برای مشارکت در این پروژه:
1. پروژه را Fork کنید
2. شاخه جدید بسازید (`git checkout -b feature/AmazingFeature`)
3. تغییرات را commit کنید (`git commit -m 'Add some AmazingFeature'`)
4. به شاخه push کنید (`git push origin feature/AmazingFeature`)
5. Pull Request ایجاد کنید

## لایسنس / License

این پروژه تحت لایسنس MIT منتشر شده است.

## تماس / Contact

برای سوالات و پیشنهادات:
- ایمیل: info@zibayishop.ir
- تلفن: ۰۲۱-۱۲۳۴۵۶۷۸

---

**ساخته شده با ❤️ برای بازار ایران**
**Made with ❤️ for Iranian Market**
