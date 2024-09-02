import productsDB from "../../database/products.json";
import { ProductsDBType } from "../../database/types";
import { sendResponse } from "../../utils";

export async function GET(_: Request, { params }: { params: { id: string } }) {
    // if (isNaN(Number(params.id))) {
    //     return sendResponse("product not found", 400, true);
    // }

    const products = productsDB.products as ProductsDBType;

    const product = products[params.id];

    if (!product) {
        return sendResponse("product not found", 400, true);
    }

    return sendResponse("successfully retrieved product", 200, false, {
        product,
    });
}
