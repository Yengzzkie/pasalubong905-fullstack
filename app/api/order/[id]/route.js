import { NextResponse } from "next/server";
import { getOrderDetails } from "./orderDetailsQueries";

export async function GET(req, { params }) {
    const { id } = params

    const order = await getOrderDetails(id)

    return NextResponse.json(order)
}
