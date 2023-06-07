'use client';
import { useState } from 'react';
import Link from 'next/link';

const Form = ({ formData, handleSubmit, handleInputChange }) => {
    return (
        <section>
            <form onSubmit={handleSubmit} name='add new item'>
                <label>
                    Add your volunteer opportunity here!
                </label>
                <div>
                    <label>
                        <input name='name' type='text' value={formData.name} placeholder='Name of your organization' onChange={handleInputChange} />
                    </label>
                    <label>
                        <input name='image' type='text' value={formData.image} placeholder='image of org' onChange={handleInputChange} />
                    </label>
                    <label>
                        <input name='type' type='text' value={formData.type} placeholder='type of opp' onChange={handleInputChange} />
                    </label>
                    <label>
                        <textarea value={formData.opportunity} onChange={handleInputChange} placeholder='Write the opportunity here' />
                    </label>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </section >
    )
}

export default Form;