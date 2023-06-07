import React from 'react'

export default async function PostData({ oppData }) {
    const posts = await promise

    const content = posts.map((post) => {
        return (
            <article key={post.id}>
                <h2>{post.name}</h2>
                <p>{post.description}</p>
            </article>
        )
    })
    return content
}
