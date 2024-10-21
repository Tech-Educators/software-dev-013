export default function BooksGrid(books) {
    return (
        <>
        {books.map(book => (
            <div key={book.id} className="relative group">
                <Link href={`/books/${book.id}-${formatTitle(book.title)}`}>
                <Image
                    src={book.img_url}
                    alt={book.title}
                    height={300}
                    width={150}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <h2 className="text-white text-xl font-bold text-center p-2">
                        {book.title}
                    </h2>
                </div>
                </Link>
            </div>
        ))}
        </>
    )
}