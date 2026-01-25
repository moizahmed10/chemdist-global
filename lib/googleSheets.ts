import { google } from "googleapis";

export async function getGoogleSheetsData(locale: string = 'en') {
  try {
    // Clean up the private key - handle various escape scenarios
    let privateKey = process.env.GOOGLE_PRIVATE_KEY || "";
    
    // Remove quotes if accidentally included
    privateKey = privateKey.replace(/^["']|["']$/g, "");
    
    // Replace escaped newlines with actual newlines
    privateKey = privateKey.replace(/\\n/g, "\n");
    
    // Also handle double-escaped newlines
    privateKey = privateKey.replace(/\\\\n/g, "\n");

    console.log("Private key starts with:", privateKey.substring(0, 30));
    console.log("Private key ends with:", privateKey.substring(privateKey.length - 30));
    console.log("Client email:", process.env.GOOGLE_CLIENT_EMAIL);
    console.log("Sheet ID:", process.env.GOOGLE_SHEET_ID);
    
    // Determine sheet name based on locale
    // Arabic -> Sheet1, English -> Sheet2
    const sheetName = locale === 'ar' ? 'Sheet1' : 'Sheet2';
    const range = `${sheetName}!A:J`;
    
    console.log("Range:", range);
    console.log("Locale:", locale);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return [];
    }

    // First row is headers
    const headers = rows[0];
    const products = [];

    // Convert rows to objects
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const product: any = {};

      headers.forEach((header: string, index: number) => {
        const value = row[index] || "";

        // Handle special fields
        if (header === "id") {
          product[header] = parseInt(value) || i;
        } else if (header === "specifications") {
          // Parse JSON specifications if it exists
          try {
            product[header] = value ? JSON.parse(value) : {};
          } catch (e) {
            product[header] = {};
          }
        } else {
          product[header] = value;
        }
      });

      products.push(product);
    }

    return products;
  } catch (error: any) {
    console.error("Error fetching Google Sheets data:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      status: error.status,
      response: error.response?.data || error.response
    });
    throw error;
  }
}
