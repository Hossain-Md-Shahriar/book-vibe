import BookCard from "./BookCard";
const Books = ({ books }) => {
  return (
    <div>
      <h3 className="text-center text-[40px] font-playfair font-bold mb-9">
        Books
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
