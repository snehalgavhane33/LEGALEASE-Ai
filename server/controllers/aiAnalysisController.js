const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HF_TOKEN,
});

const analyzeDocument = async (req, res) => {
  try {
    const { text, language = "English" } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        success: false,
        message: "Document text is required.",
      });
    }

    const response = await client.chat.completions.create({
      model: "openai/gpt-oss-20b:groq",

      messages: [
        {
          role: "system",
          content: `
You are LegalEase AI, an AI assistant that analyzes legal documents.

Analyze the provided document carefully.

Return ONLY valid JSON using exactly this structure:

{
  "summary": "Short and clear summary of the document",
  "keyClauses": [
    {
      "title": "Clause name",
      "explanation": "Simple explanation"
    }
  ],
  "risks": [
    {
      "title": "Risk title",
      "severity": "High/Medium/Low",
      "explanation": "Why this may be a risk"
    }
  ],
  "obligations": [
    "Important obligation of the user"
  ],
  "importantDates": [
    {
      "date": "Date",
      "event": "What happens on this date"
    }
  ],
  "healthScore": 0,
  "overallRisk": "High/Medium/Low"
}

Rules:
- Explain legal language in simple terms.
- Do not invent information that is not present in the document.
- Do not create dates that are not present.
- Do not create risks without evidence from the document.
- healthScore must be between 0 and 100.
- Respond in ${language}.
- Return JSON only.
          `,
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    const aiText = response.choices[0]?.message?.content;

    if (!aiText) {
      return res.status(500).json({
        success: false,
        message: "AI returned an empty response.",
      });
    }

    let result;

    try {
      // Remove markdown code fences if the model adds them
      const cleanedText = aiText
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

      result = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("AI JSON parsing error:", parseError);
      console.error("AI response:", aiText);

      return res.status(500).json({
        success: false,
        message: "AI returned an invalid JSON response.",
        rawResponse: aiText,
      });
    }

    res.status(200).json({
      success: true,
      message: "Document analyzed successfully.",
      analysis: result,
    });

  } catch (error) {
    console.error("AI analysis error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to analyze document.",
      error: error.message,
    });
  }
};

module.exports = {
  analyzeDocument,
};