This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# 💳 Stripe Payment Integration (React + Node.js)

This project demonstrates a seamless **Stripe Checkout payment gateway** integration using **React** for the frontend and **Node.js (Express)** for the backend.  
It enables users to make secure test payments, view success/failure pages, and experience a production-grade checkout workflow with minimal configuration.

---

## 🚀 Features

✅ Fully functional **Stripe Checkout** flow  
✅ Secure **client-server communication** with environment variables  
✅ Configurable **product details** and **payment success/failure redirection**  
✅ Built-in **test mode** using Stripe test keys  
✅ Simple, modular, and extensible project structure  
✅ Ready for deployment on **Vercel**, **Render**, or **Heroku**

---

## 🧩 Tech Stack

**Frontend:** React (Vite or CRA)  
**Backend:** Node.js + Express  
**Payments:** Stripe API (Checkout Sessions)  
**Styling:** Tailwind CSS or standard CSS  
**Environment:** dotenv

---

## 📁 Folder Structure

```
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── main.jsx
│   └── package.json
│
├── server/                  # Node.js backend
│   ├── server.js
│   ├── routes/
│   │   └── payment.js
│   ├── controllers/
│   │   └── stripeController.js
│   └── package.json
│
├── .env
├── README.md
└── package.json
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/stripe-integration.git
cd stripe-integration
```

### 2. Setup the backend

```bash
cd server
npm install
```

Create a `.env` file in `/server` with the following content:

```env
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
FRONTEND_URL=http://localhost:5173
PORT=4242
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup the frontend

```bash
cd ../client
npm install
```

Create a `.env` file in `/client`:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51SJ8RBRwdx4kgEePfumBk1zBg3EheKuaWoSyd0kjnNVY0fLzBP6MrafBSxyDqAG4G3OuYWN0qc4suPa8jS5LVLzE00in0CnIDW
VITE_BACKEND_URL=http://localhost:4242
```

Start the frontend:

```bash
npm run dev
```

Open your browser and navigate to:

👉 **http://localhost:5173**

---

## 🧾 Example Checkout Flow

1. User clicks **"Pay Now"** button.  
2. React app requests a Checkout Session from the backend.  
3. Backend creates a Stripe session and returns the `sessionId`.  
4. Frontend redirects the user to Stripe Checkout.  
5. On payment success/failure, Stripe redirects the user accordingly.

---

## 🧠 Stripe Webhook (Optional Advanced Setup)

If you want to listen for events (e.g., `checkout.session.completed`):

```bash
stripe listen --forward-to localhost:4242/webhook
```

In your backend:

```js
app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const event = req.body;
  // Handle events here
});
```

---

## 🧪 Testing Payments

Use Stripe’s **test cards** to simulate transactions:

| Card Type | Number | Expiry | CVC |
|------------|---------|--------|-----|
| Visa | 4242 4242 4242 4242 | Any future date | Any 3 digits |
| Mastercard | 5555 5555 5555 4444 | Any future date | Any 3 digits |

View test transactions in the [Stripe Dashboard](https://dashboard.stripe.com/test/payments).

---

## 🔒 Security Notes

- **Never expose your secret key** in frontend code.  
- Use `.env` for keys and configurations.  
- Always validate payment status server-side.  
- In production, use **HTTPS** and rotate keys regularly.

---

## 🧰 Example API Endpoint

**POST** `/create-checkout-session`

Request:
```json
{
  "items": [
    { "name": "Pro Subscription", "price": 4999, "quantity": 1 }
  ]
}
```

Response:
```json
{
  "id": "cs_test_a1B2C3D4..."
}
```

---

## 🧑‍💻 Author

**Saugata Malakar**  
🎓 B.Tech Civil Engineering, IIT Kharagpur  
💡 Developer | ML & AI Enthusiast  
📧 [Your Email or LinkedIn link here]

---

## 🪪 License

This project is licensed under the **MIT License** – you’re free to use, modify, and distribute it.

---

## 🌟 Acknowledgements

- [Stripe Docs](https://stripe.com/docs)
- [React Documentation](https://react.dev/)
- [Node.js](https://nodejs.org/)
- [Vite](https://vitejs.dev/)
