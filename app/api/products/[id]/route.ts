import { NextResponse } from "next/server";
import { getGoogleSheetsData } from "@/lib/googleSheets";
import fs from "fs";
import path from "path";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const params = await context.params;
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    let products = [];

    // Try Google Sheets first
    if (
      process.env.GOOGLE_SHEET_ID &&
      process.env.GOOGLE_CLIENT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY
    ) {
      try {
        products = await getGoogleSheetsData(locale);
      } catch (googleError) {
        console.error("Google Sheets API failed for product detail:", googleError);
        // Return 404 when Google Sheets fails
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }
    } else {
      // Fallback to JSON file
      try {
        const filePath = path.join(process.cwd(), "data", "products.json");
        const fileContent = fs.readFileSync(filePath, "utf8");
        products = JSON.parse(fileContent);
      } catch (fileError) {
        console.error("Failed to read products file:", fileError);
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }
    }

    const product = products.find((p: any) => p.id === parseInt(params.id));

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error in product detail API:", error);
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 },
    );
  }
}
