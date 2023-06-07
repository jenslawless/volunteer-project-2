"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react";

export default function Nav() {
    return (
        <nav>
            <Link href="/">Back to Home</Link>
            <Link href="/create-new" className='black_btn'>Create New Volunteer Opportunity</Link>
            <Link href="/opps">View Current Opportunities</Link>
        </nav>
    )
}