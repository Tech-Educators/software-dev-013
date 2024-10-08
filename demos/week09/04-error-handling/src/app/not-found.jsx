import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <p>Uh OH! I am in the root folder, and I have found NOTHING!!</p>
      <Link href="/">Go back home</Link>
    </>
  );
}
