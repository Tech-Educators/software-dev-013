import Link from "next/link"

// routes go inside your app directory. 

// / (the root of the app directory)
// /posts (directory inside the app directory with a page.js inside it )

export default async function PostsPage() {

    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await result.json()

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div>
                        <br/>
                        <Link key={post.id} href={`/posts/${post.id}`}>{post.title.substring(0, 10)} ...</Link>
                    </div>
                )
            })}
        </div>
    )
}