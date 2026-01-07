import BookCard from "@/components/BookCard";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
export default function BookList() {
  return (
    <section className="container mt-10">
      <Link
        href="/"
        className="inline-flex items-center px-6 h-12 gap-2 text-gray-900 bg-secondary-900 border-white rounded-xl hover:cursor-pointer hover:bg-white/80 transition duration-300"
      >
        <IoMdArrowRoundBack className="text-xl" />
        <span className="font-semibold text-xl">Back</span>
      </Link>
      <h1 className="text-5xl pt-8 pb-6">Books</h1>
      <p className="mb-4 text-lg">
        "... a mind needs a book as a sword needs an whetstone if it is to keep
        its edge."
      </p>
      <p className="mb-8 text-lg">
        I have always believed this quote as a gospel in my life. And as Seneca
        rightly said, you can only become wise if you start talking to the dead,
        and I dont think there is better way to do that then by reading books.
      </p>
      <div className="">
        <BookCard />
      </div>
    </section>
  );
}
