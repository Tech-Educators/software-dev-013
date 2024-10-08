import { notFound } from "next/navigation";

export default async function PostPage({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();
  console.log("the post is", post);

  // A way of checking if we have a response from our API, or if our response is blank:
  if (!post.id) {
    notFound();
    // Again we don't need this:
    // return <p>We couldnt find any data for that....</p>;
  }

  return (
    <div>
      <p>This is the individual page</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
