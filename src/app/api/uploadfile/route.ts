import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const categories = [
      "researchPublication",
      "bookPublication",
      "researchProject",
      "patentPolicyDocument",
    ];

    const uploadDir = path.join(process.cwd(), "public/uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const result: Record<string, string[]> = {};

    for (const category of categories) {
      const files = formData.getAll(category) as File[];

      result[category] = [];

      for (const file of files) {
        if (!file || typeof file === "string") continue;

        const buffer = Buffer.from(await file.arrayBuffer());

        const fileName = `${category}-${Date.now()}-${file.name}`;
        const filePath = path.join(uploadDir, fileName);

        await fs.promises.writeFile(filePath, buffer);

        result[category].push(`/uploads/${fileName}`);
      }
    }

    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Upload failed" }), {
      status: 500,
    });
  }
}