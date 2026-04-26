# 🌿 AquaGrow Smart Store

**Automated Care, Every Single Day.**

AquaGrow is a premium e-commerce platform for the AquaGrow Smart Irrigation Systems. Designed and built by engineering students at **FAST-NUCES Faisalabad**, this project aims to revolutionize indoor plant care in Pakistan through affordable, intelligent automation.

---

## ✨ Features

### 🛒 E-Commerce Experience
- **Premium Design**: High-end "Dark Mode" aesthetic with glassmorphism and smooth animations.
- **Dynamic Catalog**: Browse our range of smart pots (Basic, Pro, and Smart models).
- **Shopping Cart**: Fully functional cart with real-time price calculations and shipping fees.
- **Secure Checkout**: Professional checkout flow for shipping details and payment.

### 🔐 Authentication
- **Custom Auth**: Secure Login and Sign-up pages designed with modern UI best practices.
- **Social Integration**: Ready for social login expansion.

### 💳 Payments (Stripe)
- **Currency**: Supports **PKR** with automatic conversion to USD in the Stripe dashboard.
- **Security**: 256-bit SSL encrypted payments via Stripe Checkout.
- **Success Tracking**: Dedicated success page with order IDs and invoice downloads.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Payments**: [Stripe API](https://stripe.com/)
- **Deployment**: [Railway](https://railway.app/)

---

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Usman-Ifty/aquagrow-store.git
   cd aquagrow-store
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env.local` file in the root directory and add your Stripe keys:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   NEXT_PUBLIC_URL=http://localhost:3000
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

---

## 🚂 Deployment to Railway

This project is optimized for deployment on Railway:
1. Connect your GitHub repository to Railway.
2. Add your environment variables in the Railway dashboard.
3. Railway will automatically detect the `package.json` and deploy.

---

## 🎓 Academic Context
This project was developed as part of the **Entrepreneurship Project** at **FAST-NUCES Faisalabad (Semester 8)**.

**Team Members:**
- Usman Awan (22F-3378)
- Faizan Ahmad (22F-3856)
- Muhammad Ahmad (22F-8814)
- Ahmad Tayyab (22F-8817)

---

## 📞 Contact
For inquiries or support, contact **muhammadahmad8701@gmail.com** or call **+92 306 222 1078**.
