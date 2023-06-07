import React from 'react'
import getId from '@/lib/getId'
import { Suspense } from 'react'
import PostData from '@/components/PostData'

export default async function OppPage({ params }) {
    const { id } = params

    const data = await getId(id)
    const indiPost = await data

    return (
        <>
            <h2>{indiPost.name}</h2>
            <img src={indiPost.image} />
        </>
    )
}

export async function generateStaticParams() {
    const posts = await fetch(`http://localhost:3001/nonprofits`).then((res) => res.json());

    return posts.map((post) => ({
        id: post.id.toString(),
        name: post.name,
        description: post.description
    }));
}


