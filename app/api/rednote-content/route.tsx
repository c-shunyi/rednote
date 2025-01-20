import { NextResponse } from 'next/server';
import { url } from '@/app/config/gemini';

export async function POST(request: Request) {
  const requestBody = await request.json();
  console.log(requestBody);
  const geminiData = {
    contents: [
      {
        parts: [
          {
            text: `${requestBody.text},Translate the above text into ${requestBody.language},And make the text style more cheerful, add appropriate icon text,Just output the result.`,
          },
        ],
      },
    ],
  };
  console.log(url);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(geminiData),
  });

  const data = await response.json();
  const translatedText = data.candidates[0].content.parts[0].text;
  console.log(translatedText);

  return NextResponse.json({
    translatedText: translatedText,
  });
}
