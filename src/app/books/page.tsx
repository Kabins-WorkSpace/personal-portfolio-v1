import BookList from "@/sections/BookList";
import { Footer } from "@/sections/Footer";

import { ContactSection } from "@/sections/Contact";

export default function Book() {
  return (
    <section>
      <BookList />
      <ContactSection />
      <Footer />
    </section>
  );
}
