import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex flex-row justify-between w-4/12 m-8 items-center">
            <Link href='/add-book'>add_book</Link>
            <Link href='/books'>all_books</Link>
        </div>
    )
}