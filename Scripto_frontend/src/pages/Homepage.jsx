import React from "react";
import { Link } from "react-router-dom";
import boy_read from "../assets/boy_read.png";

export default function HomePage() {
  const featuredBooks = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 250,
      image: "/book1.png",
    },
    {
      id: 2,
      title: "A Brief History of Time",
      author: "Stephen Howhing",
      price: 350,
      image: "/book2.png",
    },
    {
      id: 3,
      title: "The Lean Startup",
      author: "Eric Ries",
      price: 450,
      image: "/book3.png",
    },
    {
      id: 4,
      title: "The Se Softice",
      author: "Unknown",
      price: 215,
      image: "/book4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <img src={boy_read} alt="Scripto Logo" className="w-8 h-8" />
          <h1 className="font-bold text-xl text-blue-700">Scripto</h1>
        </div>
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/browse" className="hover:text-blue-600">
              Browse Books
            </Link>
          </li>
          <li>
            <Link to="/sell" className="hover:text-blue-600">
              Sell Books
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 hover:bg-gray-100 rounded-md font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg font-medium"
          >
            Signup
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-10 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-lg space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            Scripto – Where <br /> Stories Find New Shelves
          </h2>
          <p className="text-gray-600 text-lg">
            Buy, sell, or donate books with ease.
          </p>
          {/* Search */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search by Book Title, Author or Subject"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-800 text-white px-5 py-3 rounded-md hover:bg-blue-900">
              Browse Books
            </button>
            <button className="bg-yellow-400 text-gray-900 px-5 py-3 rounded-md hover:bg-yellow-500">
              Start Selling
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="mt-10 md:mt-0">
          <img src={boy_read}alt="Reading Illustration" className="w-[700px]" />
        </div>
      </section>

      {/* Featured Books */}
      <section className="px-10 py-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Featured Books</h3>
          <Link to="/browse" className="text-blue-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h4 className="mt-4 font-semibold text-lg">{book.title}</h4>
              <p className="text-gray-600">{book.author}</p>
              <p className="font-bold text-blue-700 mt-2">${book.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

