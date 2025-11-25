const OPEN_API_URL = "https://api.openai.com/v1/chat/completions";

class OpenAIService {
  async sendMessage(messages, apiKey, config = {}) {
    try {
      const response = await fetch(OPEN_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          module: config.model || "gpt-3.5-turbo",
          messages: messages,
          max_tokens: config.max_tokens || 2000,
          temperature: config.temperature || 0.7,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || "API request failed");
      }

      const data = await response.json();

      return {
        success: true,
        data: data.choices[0].message.content,
      };
    } catch (error) {
      console.error("OpenAI API Error", error);
      return {
        success: false,
        error: error.message || "Failed to send message",
      };
    }
  }
}

export default new OpenAIService();
