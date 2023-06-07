import { NextResponse } from "next/server";
import Post from "@/src/app/models/Post";
import connect from "@/src/utils/db";

export const POST = async (req, res) => {
    try {
        await connect();
        const postData = req.body
        const newPost = new Post(postData);

        return new NextResponse(JSON.stringify(newPost), { status: 200 })

    } catch (error) {
        res.status(500).json({ message: 'Error creating post' });
    }
}


