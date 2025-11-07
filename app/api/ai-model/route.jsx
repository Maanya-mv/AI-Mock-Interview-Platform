import { NextResponse } from "next/server";
import OpenAI from "openai";
import { QUESTIONS_PROMPT } from "@/services/Constants";

export async function POST(req) {
  try {
    const { jobPosition, jobDescription, duration, interviewType } = await req.json();

    const FINAL_PROMPT = QUESTIONS_PROMPT
      .replace('{{jobTitle}}', jobPosition || '')
      .replace('{{jobDescription}}', jobDescription || '')
      .replace('{{duration}}', duration || '')
      .replace('{{type}}', (interviewType || []).join(', '));

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1-0528",
      max_tokens: 100,
      messages: [{ role: "user", content: FINAL_PROMPT }],
      response_format: "json"
    });
    console.log(">> Raw AI Response:", completion);

    const parsed = JSON.parse(completion.choices[0].message.content);
    return NextResponse.json(parsed);
    
  } catch (e) {
    if (e.response) {
      console.error(">> OpenRouter API Error:");
      console.error("Status:", e.response.status);
      console.error("Data:", e.response.data);
    } else {
      console.error(">> General Error:", e.message || e);
    }

    return NextResponse.json(
      { error: e.response?.data || e.message || "Unknown error" },
      { status: 500 }
    );
  }
}
