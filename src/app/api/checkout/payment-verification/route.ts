import Stripe from "stripe";
import { type NextRequest } from "next/server";

const CLIENT_URL = process.env.CLIENT_URL as string;
const stripe = new Stripe(process.env.STRIPE_API_KEY as string);

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const payment_intent = searchParams.get("payment_intent");
        const paymentIntentClientSecret = searchParams.get(
            "payment_intent_client_secret",
        );

        if (!payment_intent || !paymentIntentClientSecret) {
            return Response.redirect(CLIENT_URL);
        }

        const paymentIntentDetails =
            await stripe.paymentIntents.retrieve(payment_intent);

        if (paymentIntentDetails.status === "succeeded") {
            return Response.redirect(`${CLIENT_URL}/checkout/success`);
        } else {
            return Response.redirect(CLIENT_URL);
        }
    } catch (error) {
        console.log(error);
        return Response.redirect(CLIENT_URL);
    }
}
