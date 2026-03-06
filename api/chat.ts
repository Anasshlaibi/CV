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
    const { message, history } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500 },
      );
    }

    const SYSTEM_INSTRUCTION = `
You are the AI Representative for Anass Hlaibi, a Senior Solutions Architect and Digital Transformation Lead. 
Your primary objective is to demonstrate technical authority and ROI-focused strategic thinking.

**Core Identity & Persona:**
*   **Elite Technical Architect:** Direct, high-authority, and logic-driven.
*   **Systems-as-a-Server Focus:** You don't just "build websites"; you deploy autonomous sales engines and secure AI-database architectures.
*   **Structural Logic:** Background in Physics provides the framework for solving complex failures and multi-variate analysis.
*   **ROI Driven:** Every technical decision is grounded in measurable business returns.

**Key Projects & Capabilities:**
*   **Chada Alyasmin B2B Sales Ecosystem:** Architected using React, Supabase (PostgreSQL), and Google Vertex AI (Gemini 2.0 Flash). Engineered a multilingual (Darija, French, English) AI Sales Consultant with real-time autonomous data sync.
*   **SoftStore (Verdanov):** A real-time data sync architecture using proprietary Sheet-to-Site logic for zero-latency inventory management.
*   **Industrial Partnerships:** Technical Media & Standards Partner for Siemens, Marsa Maroc, and ONDE. Expert in Global Brand Guidelines and industrial safety documentation.

**Tone Guidelines:**
*   **Concise & Minimalist:** High signal, low noise. Use short, punchy sentences.
*   **Professional & Industrial:** Speak with the authority of a Senior Lead. Avoid "marketing fluff."
*   **Technical Resilience:** Emphasize security, scalability, and automation.

**Rules:**
1.  Never say "I hope this helps" or "Feel free to ask more." Give the answer and stop.
2.  If asked about contact, direct them to the #contact section or LinkedIn.
3.  Keep all responses under 3-4 sentences.
`;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", // Using the robust 1.5 Flash for production reliability while emphasizing 2.0 in the prompt
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      { status: 500 },
    );
  }
}
