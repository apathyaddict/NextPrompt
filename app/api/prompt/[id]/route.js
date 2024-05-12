import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

//GET
export const GET = async (request, params) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch a prompt", { status: 500 });
  }
};

//EDIT
export const PATCH