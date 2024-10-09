import { connect } from "@/lib/connect";
import { auth } from "@clerk/nextjs/server";

export default async function PostsPage() {
  // get the user ID from clerk
  const { userId } = auth();

  const db = connect();
  const posts = await db.query(`
    SELECT
        posts.id,
        profiles.username,
        posts.content
        FROM posts
    INNER JOIN profiles ON posts.clerk_id = profiles.clerk_id;
    `);

  async function handleCreatePost(formData) {
    "use server";
    const db = connect();
    // get the content from the form
    const content = formData.get("content");

    // add the post to the database
    await db.query(`INSERT INTO posts (clerk_id, content) VALUES ($1, $2)`, [
      userId,
      content,
    ]);
  }

  return (
    <div>
      <h2>Posts</h2>
      <h3>Add New Post</h3>
      <form action={handleCreatePost}>
        <textarea name="content" placeholder="New Post"></textarea>
        <button>Submit</button>
      </form>

      <h3>All Posts</h3>
      {posts.rows.map((post) => {
        return (
          <div key={post.id}>
            <h4>{post.username} says</h4>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
