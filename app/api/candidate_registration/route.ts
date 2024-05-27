import { NextResponse } from 'next/server';

type ResponseData = {
    message: string
}

export async function POST(req: Request) {
    if (req.method !== "POST") {
        return NextResponse.json({ message: "Invalid request method" });
    }

    let body: any;
    body = await req.json();

    if (!body) throw new Error('Request body is null');
   
    try {
        const response = await fetch(`${process.env.baseUrl}/api/v1/Candidate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.TOKEN}`
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error('Failed to register candidate');
        }

        const responseData = await response.json();
   

        return NextResponse.json({
            message: responseData
        });

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message });
        } else {
            return NextResponse.json({ message: String(error) });
        }
    }
}
