import * as sheets from "@googleapis/sheets";
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

        const auth = new sheets.auth.GoogleAuth({
            credentials: {
                type: "service_account",
                project_id: process.env.GOOGLE_SHEET_PROJECT_ID,
                private_key_id: process.env.GOOGLE_SHEET_PRIVATE_KEY_ID,
                private_key: process.env.GOOGLE_SHEET_PRIVATE_KEY?.replace(
                    /\\n/gm,
                    "\n",
                ),
                client_email: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_SHEET_CLIENT_ID,
                universe_domain: "googleapis.com",
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const googleSheetClient = sheets.sheets({
            version: "v4",
            auth,
        });

        await googleSheetClient.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_SPREADSHEET_ID,
            range: `Contact Us!A:E`,
            valueInputOption: "USER_ENTERED",
            insertDataOption: "INSERT_ROWS",
            requestBody: {
                majorDimension: "ROWS",
                values: [
                    [
                        body.first_name,
                        body.last_name,
                        body.email,
                        body.subject,
                        body.message,
                    ],
                ],
            },
        });

        return sendResponse("success", 200, false);
    } catch (error) {
        return sendResponse("something went wrong, try again", 500, true);
    }
}
