import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { auth } from "@clerk/nextjs";


const openai = new OpenAI({
apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export async function POST(request: Request) {
    try{
        const {userId} = auth();
        const body = await request.json();
        const {messages} = body;

        if(!userId){
            return new NextResponse("Unauthorized",{status:401});
        }
        if(!openai.apiKey){
            return new NextResponse("OpenAI API Key not configured",{status:500});
        }
        if(!messages || messages.length === 0){
            return new NextResponse("No messages provided",{status:400});
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages,
        })

        return NextResponse.json(response.choices[0].message);
    }catch(error){
        console.log("[CONVERSATION_ERROR]",error);
        return new NextResponse("Internal Error",{status:500});
    }
}