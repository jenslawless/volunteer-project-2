import React from 'react'
// import Image from 'next/image'
import { items } from "./data"
import { notFound } from 'next/navigation'

const getData = (cat) => {
    const data = items[cat]

    if (data) {
        return data
    }
    return notFound()
}

const Category = ({ params }) => {
    const data = getData(params.nonprofits);
    return (
        <>
            <h1>Opportunities!</h1>
            <div>
                {
                    data.map((item) => (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <img width="500" height="200" src={item.image} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Category;
