import { NextResponse } from "next/server";
import Post from "@/src/app/models/Post";
import connect from "@/src/utils/db";

export const GET = async (request) => {

    try {
        await connect();
        const posts = await Post.find()

        return new NextResponse(JSON.stringify(posts), { status: 200 });

    } catch (err) {
        return new NextResponse("Database error", { status: 500 });
    }
};