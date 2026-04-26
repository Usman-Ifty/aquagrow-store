import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { items } = await req.json();

    const line_items = items.map((item) => ({
      price_data: {
        currency: "pkr",
        product_data: {
          name: item.name,
          images: [item.image || "https://aquagrow.pk/logo.png"],
        },
        unit_amount: item.price * 100, // Stripe expects amount in cents/paisa
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
