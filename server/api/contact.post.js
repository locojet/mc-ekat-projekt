export default defineEventHandler(async (event, response) => {
    try { 
        return 'Gesendet';
    } catch (error) {
        sendError(event, createError({
            statusCode: 400,
            statusMassage: error,
        }));
    }
});
