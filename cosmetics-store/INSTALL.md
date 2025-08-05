# راهنمای نصب فروشگاه زیبایی شاپ 🚀

## 📋 پیش‌نیازها

قبل از نصب، مطمئن شوید که موارد زیر روی سیستم شما نصب شده‌اند:

- **Node.js** (نسخه 16 یا بالاتر) - [دانلود از nodejs.org](https://nodejs.org/)
- **npm** (معمولاً همراه Node.js نصب می‌شود)
- **Git** (اختیاری) - برای دانلود کد

## 🔧 روش‌های نصب

### روش 1: نصب محلی (توصیه شده برای توسعه)

#### مرحله 1: دانلود فایل‌ها
```bash
# اگر Git دارید:
git clone <repository-url>
cd cosmetics-store

# یا فایل‌های پروژه را دانلود و استخراج کنید
```

#### مرحله 2: نصب وابستگی‌ها
```bash
npm install
```

#### مرحله 3: اجرای سرور توسعه
```bash
npm run dev
```

**نتیجه:** فروشگاه روی آدرس `http://localhost:5173` در دسترس خواهد بود.

### روش 2: نصب برای تولید (Production)

#### مرحله 1: ساخت فایل‌های بهینه شده
```bash
npm run build
```

#### مرحله 2: پیش‌نمایش نسخه تولید
```bash
npm run preview
```

**نتیجه:** نسخه بهینه شده روی `http://localhost:4173` اجرا می‌شود.

## 🌐 انتقال به سرور

### برای سرور Apache

1. فایل‌های موجود در پوشه `dist/` را به پوشه `public_html` یا `www` سرور کپی کنید
2. فایل `.htaccess` زیر را در پوشه اصلی قرار دهید:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### برای سرور Nginx

پیکربندی Nginx:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### استفاده از سرویس‌های میزبانی

#### Netlify
1. فایل‌های `dist/` را zip کنید
2. به [netlify.com](https://netlify.com) بروید
3. فایل zip را drag & drop کنید

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### GitHub Pages
1. کد را به GitHub push کنید
2. در تنظیمات repository، GitHub Pages را فعال کنید
3. GitHub Action برای build خودکار تنظیم کنید

## 🛠️ دستورات مفید

```bash
# اجرای سرور توسعه
npm run dev

# ساخت نسخه تولید
npm run build

# پیش‌نمایش نسخه تولید
npm run preview

# بررسی کدها (Linting)
npm run lint

# نصب وابستگی جدید
npm install package-name

# به‌روزرسانی وابستگی‌ها
npm update
```

## 🔧 رفع مشکلات رایج

### مشکل 1: خطای "command not found"
```bash
# نصب Node.js و npm
# برای Ubuntu/Debian:
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# برای macOS:
brew install node

# برای Windows: دانلود از nodejs.org
```

### مشکل 2: خطای port in use
```bash
# تغییر پورت
npm run dev -- --port 3000
```

### مشکل 3: مشکل در build
```bash
# پاک کردن cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📱 تست روی دستگاه‌های مختلف

### تست روی موبایل
1. مطمئن شوید که دستگاه موبایل و کامپیوتر در یک شبکه هستند
2. IP کامپیوتر را پیدا کنید: `ipconfig` (Windows) یا `ifconfig` (Mac/Linux)
3. روی موبایل به `http://YOUR_IP:5173` بروید

### تست responsive
- Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)
- Firefox → Responsive Design Mode (Ctrl+Shift+M)

## 🔒 تنظیمات امنیتی (برای تولید)

### HTTPS
```bash
# برای سرور محلی با HTTPS
npm install -g serve
serve -s dist -l 443 --ssl-cert cert.pem --ssl-key key.pem
```

### متغیرهای محیطی
فایل `.env` ایجاد کنید:
```env
VITE_API_URL=https://your-api.com
VITE_PAYMENT_GATEWAY=https://payment.com
```

## 📊 بهینه‌سازی عملکرد

### کاهش حجم فایل‌ها
```bash
# فشرده‌سازی gzip
npm install -g gzipper
gzipper compress ./dist
```

### تنظیم CDN
- استفاده از Cloudflare
- بهینه‌سازی تصاویر
- کش کردن فایل‌های استاتیک

## 🆘 پشتیبانی

اگر با مشکلی مواجه شدید:

1. **مستندات:** این فایل و README.md را مطالعه کنید
2. **لاگ‌ها:** خطاها را در کنسول بررسی کنید
3. **Issues:** در GitHub issue ایجاد کنید
4. **تماس:** info@zibayishop.ir

## ✅ چک‌لیست نصب

- [ ] Node.js نصب شده (نسخه 16+)
- [ ] npm کار می‌کند
- [ ] فایل‌های پروژه دانلود شده
- [ ] `npm install` اجرا شده
- [ ] `npm run dev` کار می‌کند
- [ ] فروشگاه در مرورگر باز می‌شود
- [ ] تمام صفحات قابل دسترسی هستند
- [ ] طراحی responsive است
- [ ] فونت فارسی نمایش داده می‌شود

---

**موفق باشید! 🎉**

اگر همه مراحل را درست انجام داده‌اید، فروشگاه زیبایی شاپ آماده استفاده است.