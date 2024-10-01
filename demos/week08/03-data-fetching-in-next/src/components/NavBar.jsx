import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <Link href={'/'}>Home</Link>
            <Link href={'/about-us'}>about us</Link>
            <Link href={'/posts'}>posts</Link>
        </nav>
    )
}