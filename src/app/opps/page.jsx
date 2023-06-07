// import VolCards from "src/lib/getAllPosts";
'use client';
import Link from "next/link"
import { useState, useEffect } from 'react';

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/posts');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            {data.map((item) => (
                <Link href={`/opps/${item._id}`} key={item._id}>
                    <p>{item.name}</p>
                    <img width="100" height="100" src={item.image} />
                </Link>
            ))
            }
        </div >
    );
};

export default MyComponent;