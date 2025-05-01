import {
  PackageCheck,
  Truck,
  Leaf,
  Layers,
  Palette,
  Settings2,
} from "lucide-react";

export default function Product() {
  return (
    <div className="bg-white text-[#004D40]">
      {/* Header */}
      <section className="bg-[#F5F5F5] py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore our range of high-quality, durable, and eco-conscious packaging materials.
        </p>
      </section>

      {/* Product Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Leno Bags */}
          <div className="border rounded shadow hover:shadow-lg p-6 bg-white text-center transition">
            <Leaf className="mx-auto text-[#F9A825]" size={48} />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Leno Bags</h3>
            <p>
              Ideal for storing agricultural produce such as onions, potatoes, and vegetables. Lightweight, breathable, and reusable.
            </p>
          </div>

          {/* PP Bags */}
          <div className="border rounded shadow hover:shadow-lg p-6 bg-white text-center transition">
            <Truck className="mx-auto text-[#F9A825]" size={48} />
            <h3 className="text-2xl font-semibold mt-4 mb-2">PP Bags</h3>
            <p>
              Sturdy, versatile polypropylene bags for heavy industrial materials like cement, fertilizers, and grains.
            </p>
          </div>

          {/* BOPP Bags */}
          <div className="border rounded shadow hover:shadow-lg p-6 bg-white text-center transition">
            <PackageCheck className="mx-auto text-[#F9A825]" size={48} />
            <h3 className="text-2xl font-semibold mt-4 mb-2">BOPP Bags</h3>
            <p>
              High-resolution printed, moisture-resistant bags perfect for food grains, feed, seeds, and consumer goods.
            </p>
          </div>

          {/* Laminated Rolls */}
          <div className="border rounded shadow hover:shadow-lg p-6 bg-white text-center transition">
            <Layers className="mx-auto text-[#F9A825]" size={48} />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Laminated Rolls</h3>
            <p>
              Durable multi-layer laminated film rolls used for pouch packaging in food and industrial sectors.
            </p>
          </div>

          {/* Custom Printed Bags */}
          <div className="border rounded shadow hover:shadow-lg p-6 bg-white text-center transition">
            <Palette className="mx-auto text-[#F9A825]" size={48} />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Custom Printing</h3>
            <p>
              Enhance brand identity with vibrant, customized print designs tailored to your product packaging.
            </p>
          </div>

          {/* Tailor-Made Packaging */}
          <div className="border rounded shadow hover:shadow-lg p-6 bg-white text-center transition">
            <Settings2 className="mx-auto text-[#F9A825]" size={48} />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Tailor-Made Packaging</h3>
            <p>
              Fully customized packaging solutions, sizes, and materials built around your business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#F5F5F5] py-12 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">Need Something Specific?</h2>
        <p className="max-w-xl mx-auto mb-6">
          We offer personalized packaging solutions for various industries. Let us help you find the perfect fit.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#F9A825] hover:bg-[#e69500] text-white font-semibold px-6 py-3 rounded transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
