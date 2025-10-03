import { useState } from "react";

export default function SellBooks() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    condition: "New",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book listed:", formData);

    // Later you can replace with API call (POST to Spring Boot backend)
    alert("Book has been listed for sale ✅");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 to-purple-200 px-6">
      <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sell Your Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Book Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Book Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter book title"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price (₹)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* Condition */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Condition
            </label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Used">Used</option>
            </select>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Book Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full mt-1 text-gray-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            List Book for Sale
          </button>
        </form>
      </div>
    </div>
  );
}
