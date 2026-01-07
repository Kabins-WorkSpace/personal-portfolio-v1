import BookList from "@/sections/BookList";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Book() {
  return (
    <section className="container mt-10">
      <Link
        href="/"
        className="inline-flex items-center px-6 h-12 gap-2 text-gray-900 bg-secondary-900 border-white rounded-xl hover:cursor-pointer hover:bg-white/80 transition duration-300"
      >
        <IoMdArrowRoundBack className="text-xl"/>
        <span className="font-semibold text-xl">Back</span>
      </Link>
      <BookList />
    </section>
  );
}
