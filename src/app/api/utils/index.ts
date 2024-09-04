export const getRequestBody = async (
    request: Request,
): Promise<{ body: any; error?: Error }> => {
    try {
        const requestBody = await request.json();

        return {
            body: requestBody,
        };
    } catch (error) {
        return {
            body: null,
            error: new Error("Invalid request body"),
        };
    }
};

export const sendResponse = (
    message: string,
    status: number,
    error: boolean,
    data?: any,
) => {
    return new Response(
        JSON.stringify({
            message,
            status,
            error,
            data: data || null,
        }),
        {
            status,
            headers: {
                "Content-Type": "application/json",
            },
        },
    );
};
