import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>This page is not found</h1>
        <br/>
        <br/>
        <br/>
        <Link href="/">Back to Home</Link>
    </div>
  )
}

export default NotFound;