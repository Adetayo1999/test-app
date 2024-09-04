import { getRequestBody, sendResponse } from "../utils";

export async function POST(request: Request) {
    try {
        const { body, error } = await getRequestBody(request);

        if (error) {
            return sendResponse(error.message, 400, true);
        }

        if (!body || !body?.email) {
            return sendResponse("invalid request", 400, true);
        }

        return sendResponse("successfully added to waitlist", 200, false, {
            data: body,
        });
    } catch (error) {
        return sendResponse("something went wrong, try again", 500, true);
    }
}
