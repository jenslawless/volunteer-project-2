'use client';

import { useState } from 'react';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation'

import Form from "/components/Form"

const CreatePost = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        name: '',
        image: '',
        opportunity: '',
        type: '',
    });

    const createPost = async (newObject) => {
        e.preventDefault();
        setSubmitting(true)

        try {
            const response = await fetch('/api/prompt/new', {
                method: "POST",
                body: JSON.stringify({
                    name: post.name,
                    image: post.image,
                    type: post.type,
                    opportunity: post.opportunity
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            console.log(data)

            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPost}
        />
    )
}

export default CreatePost;