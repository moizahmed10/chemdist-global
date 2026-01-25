import { NextResponse } from "next/server";
import { getGoogleSheetsData } from "@/lib/googleSheets";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  try {
    // Get locale from query params or headers
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    
    // Try Google Sheets first
    if (
      process.env.GOOGLE_SHEET_ID &&
      process.env.GOOGLE_CLIENT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY
    ) {
      try {
        const products = await getGoogleSheetsData(locale);
        return NextResponse.json(products);
      } catch (googleError) {
        console.error("Google Sheets API failed, returning empty array:", googleError);
        // Return empty array instead of error when Google Sheets fails
        return NextResponse.json([]);
      }
    }

    // Fallback to JSON file if Google Sheets not configured
    const filePath = path.join(process.cwd(), "data", "products.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const products = JSON.parse(fileContent);

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error in products API:", error);
    // Return empty array instead of 500 error
    return NextResponse.json([]);
  }
}
