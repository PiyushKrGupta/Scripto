export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">About Scripto</h1>
        <p className="text-lg text-gray-600">
          Scripto is your one-stop platform for buying, selling, and discovering books. 
          Whether you're a student, book lover, or just someone looking to share knowledge, 
          Scripto helps connect readers and sellers seamlessly.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            📘 Our Mission
          </h2>
          <p className="text-gray-600">
            Our mission is to make books more accessible and affordable, 
            while promoting sustainability by giving pre-loved books a second life.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            🌍 Why Scripto?
          </h2>
          <p className="text-gray-600">
            Scripto bridges the gap between readers and sellers, 
            offering a safe and interactive platform where knowledge is shared, 
            not wasted. Every book listed is a chance for someone new to learn.
          </p>
        </div>
      </div>

      {/* Team / Closing */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-3">👩‍💻 The Team</h2>
        <p className="text-gray-600">
          We are a passionate group of developers, readers, and dreamers who believe 
          in the power of stories and knowledge. Scripto is built to serve 
          communities, students, and anyone who values learning.
        </p>
      </div>
    </div>
  );
}
