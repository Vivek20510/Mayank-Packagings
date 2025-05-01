import { Link } from "react-router-dom";
import { Truck, Leaf, PackageCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white text-[#004D40]">
      {/* Hero Section */}
      <section className="bg-[#004D40] text-white text-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to Mayank Packaging Solutions
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Your trusted partner in Leno Bags & Packing Materials
        </p>
        <Link
          to="/product"
          className="inline-block bg-[#F9A825] hover:bg-yellow-600 text-[#004D40] font-semibold px-6 py-3 rounded-lg transition"
        >
          Explore Our Products
        </Link>
      </section>

      {/* Services Section */}
      <section className="bg-[#F5F5F5] py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Core Services</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <h3 className="text-xl font-bold mb-2">Leno Bags</h3>
            <p className="text-[#333]">
              Durable and breathable bags for fruits, vegetables, and industrial use.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <h3 className="text-xl font-bold mb-2">PP Bags</h3>
            <p className="text-[#333]">
              High-strength polypropylene bags customized for your storage needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <h3 className="text-xl font-bold mb-2">BOPP Packing Material</h3>
            <p className="text-[#333]">
              Moisture-proof, print-friendly packaging for retail and bulk use.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us</h2>
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center px-4">
            <Truck className="h-12 w-12 text-[#F9A825] mb-4" />
            <h4 className="text-lg font-bold mb-2">On-Time Delivery</h4>
            <p className="text-[#444]">We ensure fast, reliable, and secure delivery across India.</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <Leaf className="h-12 w-12 text-[#F9A825] mb-4" />
            <h4 className="text-lg font-bold mb-2">Eco-Friendly</h4>
            <p className="text-[#444]">Our materials are sustainable and meet global packaging standards.</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <PackageCheck className="h-12 w-12 text-[#F9A825] mb-4" />
            <h4 className="text-lg font-bold mb-2">Quality Assurance</h4>
            <p className="text-[#444]">We follow strict quality checks to ensure every bag meets your expectations.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
