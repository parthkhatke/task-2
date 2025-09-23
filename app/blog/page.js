import React from 'react'
import Link from 'next/link'

const data = await fetch('http://localhost:1337/api/articles?populate=*', { cache: 'no-store' })
const res = await data.json()

const BlogPage = () => {
  return (
    <div>
      <div>
        <h1 >The Blog</h1>
        <div >
          {res.data.map(item => {
            const { title, description, slug } = item; 
            return (
              <Link 
                key={item.id} 
                href={`/blogpost/${slug}`} 
                className="block group shadow-md"
              >
                <h2 >
                  {title}
                </h2>
                <p >
                  {description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BlogPage