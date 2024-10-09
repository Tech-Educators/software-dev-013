import { connect } from "@/lib/connect";
import { auth } from "@clerk/nextjs/server";

export default function ProfilePage() {
  const { userId } = auth();

  async function handleUpdateProfile(formData) {
    "use server";
    const db = connect();
    // get the information from the form
    const username = formData.get("username");
    const bio = formData.get("bio");

    // check whether a profile exists
    const profiles = await db.query(
      `SELECT * FROM profiles WHERE clerk_id = $1`,
      [userId]
    );
    if (profiles.rowCount === 0) {
      // insert our profile into the DB
      await db.query(
        `INSERT INTO profiles (clerk_id, username, bio) VALUES ($1, $2, $3)`,
        [userId, username, bio]
      );
    } else {
      // update the existing item
      await db.query(
        `UPDATE profiles SET username=$1, bio=$2 WHERE clerk_id=$3`,
        [username, bio, userId]
      );
    }
  }

  return (
    <div>
      <h2>Update Profile Page</h2>
      <p>
        Welcome to Bebo 2. You&apos;re probably a normal person trying to be
        edgy.
      </p>
      <form action={handleUpdateProfile}>
        <input name="username" placeholder="Username" />
        <textarea name="bio" placeholder="Bio"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
