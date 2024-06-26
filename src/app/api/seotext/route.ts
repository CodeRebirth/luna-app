import { NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";
import Seotext from "@/app/(models)/Seotext";
// import type { NextApiRequest, NextApiResponse } from 'next'


export async function GET(req: any): Promise<NextResponse> {
    await connection();
    try {
        const seoTextData = await Seotext.find();
        return NextResponse.json({ seoTextData, "message": "SeoTextData Data Fetched" }, { status: 200 });
    } catch (error: any) {
        console.error("Error caught", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}


export const revalidate = 0;