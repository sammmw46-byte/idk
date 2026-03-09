import OpenAI from 'openai';

const client = new OpenAI({
    baseURL: 'https://api.meganova.ai/v1',
    apiKey: process.env.MEGANOVA_API_KEY
});

const response = await client.chat.completions.create({
    model: "Sao10K/L3-70B-Euryale-v2.1",
    messages: [
			{"role":"user","content":"Is Montreal a thriving hub for the AI industry?"}
		],
    max_tokens: null,
    temperature: 1,
    top_p: 0.9,
    stream: false
});

console.log(response.choices[0].message.content);
