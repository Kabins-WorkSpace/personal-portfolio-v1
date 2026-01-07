import BookCard from "@/components/BookCard";
export default function BookList() {
  return (
    <section>
      <h1 className="text-5xl pt-8 pb-6">Books</h1>
      <p className="mb-4 text-lg">
        "... a mind needs a book as a sword needs an whetstone if it is to keep
        its edge."
      </p>
      <p className="mb-8 text-lg">
        I have always believed this quote as a gospel in my life. And
        as Seneca rightly said, you can only become wise if you start talking to
        the dead, and I dont think there is better way to do that then by
        reading books.
      </p>
      <div className="">
        <BookCard />
      </div>
    </section>
  );
}
