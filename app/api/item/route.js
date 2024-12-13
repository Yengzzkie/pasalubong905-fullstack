import { NextResponse } from "next/server";
import { getItems, createItem } from "./itemQueries"

export async function GET(req) {
    const items = await getItems();

    return NextResponse.json(items)
}

export async function POST(req) {
    try {
        const reqJSON = await req.json();
        const item = await createItem(reqJSON); 
        
        return NextResponse.json({ message: "Item created successfully", item }, { status: 201 });
    } catch (error) {
        console.error(error); 
        return NextResponse.json({ error: "Failed to create item" }, { status: 500 });
    }
}