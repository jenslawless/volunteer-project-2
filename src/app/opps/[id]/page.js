import React from 'react'
// import getId from '@/lib/getId'
import { Suspense } from 'react'
// import PostData from '@/components/PostData'

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    return res.json();
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id);
    return (
        <div>
            <img src={data.image} width="200" height="200" />
            <p>{data.name}</p>
            <p>{data.description}</p>
        </div>
    )
}

export default BlogPost;


// export default async function OppPage({ params }) {
//     // const { id } = params
//     const data = await getId(params.id)
//     const indiPost = await data

//     return (
//         <>
//             <h2>{indiPost.name}</h2>
//             <img src={indiPost.image} />
//         </>
//     )
// }

// export async function generateStaticParams() {
//     const posts = await fetch(`http://localhost:3001/nonprofits`).then((res) => res.json());

//     return posts.map((post) => ({
//         id: post.id.toString(),
//         name: post.name,
//         description: post.description
//     }));
// }