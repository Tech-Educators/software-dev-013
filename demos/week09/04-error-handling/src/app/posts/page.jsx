import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();

  //   console.log("the posts are ", posts);
  console.log(posts.length);

  // Check for errors early:
  if (posts.length == undefined || posts.length < 10) {
    notFound();
    // We dont need this because we're invoking the Not-Found page:
    // return <p>Error fetching posts</p>;
  }

  return (
    <>
      <h2>All Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </>
  );
}
