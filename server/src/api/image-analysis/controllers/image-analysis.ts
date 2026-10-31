import { Context } from "koa"
import { analyzeImage } from "../services/gemini";


export default {
    async analyze(ctx: Context){
        const file = ctx.request.files?.image as any;
        if(!file) return ctx.badRequest('No image uploaded')

        const filePath = file.filepath;
        const mimeType = file.mimetype as string | undefined;
        if (!mimeType?.startsWith('image/')) {
            return ctx.badRequest('Please upload a valid image file');
        }

        try {
            const result = await analyzeImage(filePath, mimeType)
            return ctx.send({success: true, result})
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            strapi.log.error(`Image analysis failed (${mimeType}): ${message}`);

            // Keep the UI message helpful while leaving the detailed cause in
            // the server log. Never include request credentials in this response.
            return ctx.internalServerError("Image analysis failed. Check the server log for the Gemini error details.");
        }
    }
}
