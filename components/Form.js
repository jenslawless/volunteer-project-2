'use client';

import React from 'react'
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section>
            <h1>
                {type} Post
            </h1>
            <p>
                {type} and share your opportunity!
            </p>

            <form onSubmit={handleSubmit}>
                <label>
                    Add your volunteer opportunity here!
                </label>
                <div>
                    <input name='name' type='text' value={post.name} placeholder='Name of your organization' onChange={(e) => setPost({ ...post, name: e.target.value })} />
                    <input type='text' name='image' placeholder='image of org' value={post.image} onChange={(e) => setPost({ ...post, image: e.target.value })} />
                    <input type='text' value={post.type} onChange={(e) => setPost({ ...post, type: e.target.value })} placeholder='type of opp' name='type' />
                    <textarea value={post.opportunity} onChange={(e) => setPost({ ...post, opportunity: e.target.value })} placeholder='Write the opportunity here' />
                    <button type='submit'> Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Form