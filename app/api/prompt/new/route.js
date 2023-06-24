import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompts";
export const POST = async (req, res) => {
  const { prompt, tag, userId } = req.body;

  try {
    await connectToDatabase();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();

    res.status(200).json({ message: "Prompt created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Prompt could not be created" });
  }
};
