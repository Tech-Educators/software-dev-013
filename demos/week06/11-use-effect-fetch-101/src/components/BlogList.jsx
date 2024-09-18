import { useState, useEffect } from "react"

export default function BlogList() {

    // we're going to use useState to set up a state varible to hold our blogs posts
    // react componenets themselves cannot be async so we can't just fetch. 
    const [postsArray, setPosts] = useState([])


    // effect effect takes a callback function and an array of depencies (dependency array)
    // if you don't pass it a depenecy array it work right - the code inside the useeffect will run on every same 
    // if you give an empty dependency array the effects happens when the component first mounts / the first time it ever runs.
    // if you add a varible into the dependency array, react will 'watch' that varible, and if it changes, re-run the 'effect' 
    useEffect(() => {
        // in dev mode react runs useEffect twice to help you catch memory leaks. 
        async function fetchBlogPosts() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
                const posts = await response.json()
                setPosts(posts)
                console.log(posts)
            } catch (error) {
                console.log(error)
            }
        }

        fetchBlogPosts()
    }, [])

    return (
        <div>
            {postsArray.map((post) => {
                return (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}