import { books } from "@/data/books";
import Image from "next/image";
export default function BookCard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <div key={book.id} className="my-10">
            <Image
              src={book.url}
              alt={book.title}
              className="h-[360px] w-[260px]"
            />
            <h3 className="font-serif text-3xl pt-4 w-[270px]">{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}
