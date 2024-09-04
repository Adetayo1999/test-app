import { getRequestBody, sendResponse } from "../utils";

export async function POST(request: Request) {
    try {
        const { body, error } = await getRequestBody(request);

        if (error) {
            return sendResponse(error.message, 400, true);
        }

        if (
            !body ||
            !body?.email ||
            !body.first_name ||
            !body.last_name ||
            !body.subject ||
            !body.message
        ) {
            return sendResponse("invalid request", 400, true);
        }

        return sendResponse("success", 200, false);
    } catch (error) {
        return sendResponse("something went wrong, try again", 500, true);
    }
}
