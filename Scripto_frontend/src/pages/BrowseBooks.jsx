import { useState } from "react";

const booksData = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "₹299",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "₹349",
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: "₹249",
    image: "https://covers.openlibrary.org/b/id/7222246-M.jpg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "₹199",
    image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
  },
];

export default function BrowseBooks() {
  const [search, setSearch] = useState("");
  const [authorFilter, setAuthorFilter] = useState("All");

  const authors = ["All", ...new Set(booksData.map((book) => book.author))];

  const filteredBooks = booksData.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchesAuthor = authorFilter === "All" || book.author === authorFilter;
    return matchesSearch && matchesAuthor;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        Browse Books
      </h1>

      {/* 🔍 Search + Filter */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-xl w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <select
          value={authorFilter}
          onChange={(e) => setAuthorFilter(e.target.value)}
          className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {authors.map((author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>

      {/* 📚 Book Cards */}
      {filteredBooks.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-200"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {book.title}
                </h2>
                <p className="text-sm text-gray-500">by {book.author}</p>
                <p className="mt-2 text-indigo-600 font-bold">{book.price}</p>
                <button className="mt-3 w-full py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          No books found. Try a different search.
        </p>
      )}
    </div>
  );
}
