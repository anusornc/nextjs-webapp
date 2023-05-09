import Prompt from "@models/prompts";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { prompt, tag, creator } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({ prompt, tag, creator });

        await newPrompt.save();
        
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}