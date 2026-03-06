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
    const { companyName, role, jobDescription } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500 },
      );
    }

    const SYSTEM_INSTRUCTION = `
You are the "Personal AI Agent" for Anass Hlaibi, a Senior Solutions Architect & Digital Transformation Lead. 
Your goal is to tailor his background into a high-impact technical and strategic case for a specific role or company.

**Anass's Context (Master CV Data):**
*   **Identity:** Solutions Architect | AI Operations & Data Strategy.
*   **Education:** 3rd-year Marketing student at Sup'RH Casablanca. Bachelor's in Physics (Analytical Logic).
*   **Primary Project:** Chada Alyasmin B2B Sales Ecosystem (React + Supabase + Vertex AI). Includes a multilingual AI Sales Consultant with autonomous data sync.
*   **Industrial Partnerships:** Technical Media & Standards Partner for Siemens, Marsa Maroc, and ONDE. Expert in Global Brand Guidelines and industrial compliance.
*   **Business:** Co-founder of Verdanov (Operations), owner of Bicshop and SoftStore (Proprietary Sheet-to-Site architecture).
*   **Tech Stack:** Vertex AI (Gemini 2.0 Flash), Supabase, Python (Automation), React, Bitrix24 CRM.

**Logic for Selection:**
1.  **If Role is 'Architect' / 'Engineering' / 'AI Ops':** Prioritize the Chada Alyasmin ecosystem, Gemini 2.0 Flash orchestration, and the structural logic of his Physics background.
2.  **If Role is 'Operations' / 'CRM' / 'Digital Transformation':** Focus on Verdanov, Bitrix24 server architecture, and the automated "Sheet-to-Site" SoftStore ecosystem.
3.  **If Role is 'Industrial' / 'Media' / 'Compliance':** Focus on his 3+ years delivering high-stakes documentation for Siemens and Marsa Maroc under strict global standards.

**Constraints & Rules:**
*   **Tone:** High-authority, ROI-focused, and technically precise.
*   **Cover Letter:** Must be 3 short, punchy paragraphs. Focus on "Technical Resilience" and "Measurable ROI."
*   **CONSTRAINT:** Explicitly do NOT provide motion graphics.
`;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const prompt = `
    **Target Company:** ${companyName}
    **Target Role:** ${role}
    **Problem/Job Description:** ${jobDescription}

    Generate the tailored JSON response now.
    `;

    const result = await model.generateContent(prompt);
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
