import Stripe from "stripe";
import { getRequestBody } from "../utils";

const stripe = new Stripe(process.env.STRIPE_API_KEY as string);

// TODO: Move products to some database

interface ProductType {
    id: number;
    title: string;
    price: number;
}

const products: Record<string, ProductType> = {
    "1": {
        id: 1,
        title: "Gram Furniture",
        price: 100,
    },
    "2": {
        id: 2,
        title: "Steph Furniture",
        price: 100,
    },
    "3": {
        id: 3,
        title: "Gold Stands",
        price: 100,
    },
};

export async function POST(request: Request) {
    try {
        const { body, error } = await getRequestBody(request);

        if (error) {
            return new Response(
                JSON.stringify({
                    message: error.message,
                    status: 400,
                    error: true,
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
        }

        // TODO: Validate request body
        const cart_items = body?.cart_items;

        if (!cart_items || !cart_items?.length || cart_items?.length === 0) {
            return new Response(
                JSON.stringify({
                    message: "Invalid request body",
                    status: 400,
                    error: true,
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
        }

        let amount = 0;

        cart_items.forEach((item: any) => {
            const product = products[item.id];

            if (product) {
                amount += product.price * item.quantity;
            }
        });

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        const myData = {
            data: { client_secret: paymentIntent.client_secret },
            status: 200,
            error: false,
        }; // Your JSON data
        const blob = new Blob([JSON.stringify(myData)], {
            type: "application/json",
        });

        const myOptions = { status: 200, statusText: "OK" }; // Options for the Response
        const response = new Response(blob, myOptions); // Create the Response object

        // If you need to set headers
        response.headers.set("Content-Type", "application/json");

        return response;
    } catch (error) {
        console.log(error);

        const data = {
            message: "Something went wrong, try again later",
            status: 500,
            error: true,
        };

        const blob = new Blob([JSON.stringify(data)], {
            type: "application/json",
        });

        const response = new Response(blob, { status: 500 });

        response.headers.set("Content-Type", "application/json");

        return response;
    }
}
