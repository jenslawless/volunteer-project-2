'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

import Form from "src/components/Form"

const CreatePost = () => {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        description: '',
        type: '',
    });

    const router = useRouter();

    const handleInputChange = async (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData, [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/post', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push('/opps');
            } else {
                const errorData = await response.json();
                console.error('Form submission error:', errorData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit}
        />
    )
}

export default CreatePost;