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
            text: `${requestBody.text},According to the above English name,generate a nice Chinese name with personality.`,
          },
        ],
      },
    ],
  };
  console.log(geminiData, url);

  // const response = await fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(geminiData),
  // });

  // const data = await response.json();
  // const translatedText = data.candidates[0].content.parts[0].text;
  // console.log(translatedText);

  return NextResponse.json({
    translatedText: `
      # Title: OMG! Have You Tried This Trendy Greeting? 🤩✨

Hey, lovelies! Ahhhh, have you ever heard of "nihao"?
It's not just a word; it's a whole vibe! 🌟

Let me tell you, this simple greeting means "hello" in Mandarin, and it’s spreading like wildfire! Whether you're traveling, meeting new friends, or just want to sound cool, dropping a "nihao" can totally level up your social game! 🥳

Imagine walking into a room and confidently saying "nihao" to everyone! The reactions? Priceless! 😍 You instantly become the life of the party, and trust me, people will remember you!

So, why not sprinkle a little "nihao" in your daily life? It’s fun, friendly, and oh-so-catchy! Plus, it might just spark some great conversations. 

Let’s embrace this trend together! Can’t wait to hear how you use it! 💖✨

Remember, life’s too short for boring greetings! Go out there and spread some "nihao" love! 🌍💫
    `,
  });
}
