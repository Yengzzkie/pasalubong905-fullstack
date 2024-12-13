import { NextResponse } from "next/server";
import { getOrders, createOrder } from "./orderQueries"

export async function GET(req) {
    const order = await getOrders()

    return NextResponse.json(order)
}

export async function POST(req) {
    try {
        const reqJSON = await req.json();
        console.log(reqJSON)
        const order = await createOrder(reqJSON); 
        
        return NextResponse.json({ message: "Order created successfully", order }, { status: 201 });
    } catch (error) {
        console.error(error); 
        return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
    }
}