import { GoogleGenerativeAI } from "@google/generative-ai";

export const config = {
  runtime: "edge",
};

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
    });
  }

  try {
    const { jobDescription, activeRole, masterData } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: "Server configuration error: Missing API Key",
        }),
        { status: 500 },
      );
    }

    const SYSTEM_PROMPT = `
You are a Senior Strategic Architect and Digital Transformation Lead. Your task is to analyze a Job Description against Anass Hlaibi's high-end "Systems-as-a-Server" background.

Synthesis: Align his technical resilience and ROI-focused engineering with the key operational pain points mentioned in the job description.

Tone: Industrial, analytical, and high-authority.

Selection Logic:
- If the role is Architecture/AI: Emphasize the Chada Alyasmin B2B ecosystem and Vertex AI orchestration.
- If the role is Operations/Data: Emphasize Verdanov's Bitrix24 infrastructure and real-time data sync systems.
- If the role is Media/Compliance: Emphasize Fortune 500 industrial standards (Siemens, etc.).

Formatting: Output a 3-sentence high-impact Professional Summary and 3 power-keywords (e.g., "AI Orchestration", "Technical Resilience", "ROI Optimization").

Return VALID JSON only:
{
  "summary": "The tailored summary...",
  "keywords": ["Keyword1", "Keyword2", "Keyword3"]
}
`;

    const USER_PROMPT = `
    Job Description: ${jobDescription}
    Target Role: ${activeRole}
    Anass's Background: ${masterData.summary[activeRole.toLowerCase()]}
    Skills: ${masterData.skills[activeRole.toLowerCase()].join(", ")}
    `;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContent(USER_PROMPT);
    const response = await result.response;
    let text = response.text();

    // Clean up markdown code blocks if present
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return new Response(text, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      { status: 500 },
    );
  }
}
