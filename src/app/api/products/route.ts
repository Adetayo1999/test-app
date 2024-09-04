import productsDB from "../database/products.json";
import { sendResponse } from "../utils";

export function GET() {
    const products = Object.values(productsDB.products);

    const productsList = products.map((product) => ({
        ...product,
        descriptions: undefined,
    }));

    return sendResponse("successfully retrieved products", 200, false, {
        products: productsList,
    });
}
