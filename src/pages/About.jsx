import {
    Truck,
    Leaf,
    PackageCheck,
    Factory,
    BadgeCheck,
    Globe,
    ShieldCheck,
    Recycle,
  } from "lucide-react";
  
  export default function About() {
    return (
      <div className="bg-white text-[#004D40]">
        {/* Hero Section */}
        <section className="bg-[#F5F5F5] py-16 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Mayank Packaging</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Trusted supplier of Leno Bags, PP Bags, and BOPP Packing Materials since 2010.
          </p>
        </section>
  
        {/* Who We Are */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
              <p className="mb-4">
                Established in 2010, Mayank Packaging has evolved from a small startup to a reliable
                merchant and commission agent in the packaging industry. We supply high-quality Leno,
                PP, and BOPP Bags tailored to agricultural, industrial, and consumer needs.
              </p>
              <p>
                Our dedicated team ensures every product meets the highest standards of quality,
                performance, and eco-consciousness.
              </p>
            </div>
            <div className="flex justify-center">
              <Factory className="text-[#F9A825]" size={80} />
            </div>
          </div>
        </section>
  
        {/* Vision & Mission */}
        <section className="bg-[#F5F5F5] py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                <Globe className="text-[#F9A825]" /> Our Vision
              </h3>
              <p>
                To be a leader in sustainable and innovative packaging solutions that exceed customer
                expectations while supporting a greener future.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                <ShieldCheck className="text-[#F9A825]" /> Our Mission
              </h3>
              <p>
                To deliver durable, high-quality, and eco-friendly packaging materials that offer
                unmatched value and support to our clients.
              </p>
            </div>
          </div>
        </section>
  
        {/* What We Do */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border p-6 rounded shadow hover:shadow-lg transition text-center">
              <PackageCheck className="mx-auto text-[#F9A825]" size={40} />
              <h4 className="text-xl font-semibold mt-4 mb-2">Leno Bags</h4>
              <p>
                Lightweight, breathable bags ideal for onions, potatoes, and agricultural produce.
              </p>
            </div>
            <div className="bg-white border p-6 rounded shadow hover:shadow-lg transition text-center">
              <Truck className="mx-auto text-[#F9A825]" size={40} />
              <h4 className="text-xl font-semibold mt-4 mb-2">PP Bags</h4>
              <p>
                Durable and strong bags perfect for transporting cement, fertilizer, and chemicals.
              </p>
            </div>
            <div className="bg-white border p-6 rounded shadow hover:shadow-lg transition text-center">
              <Leaf className="mx-auto text-[#F9A825]" size={40} />
              <h4 className="text-xl font-semibold mt-4 mb-2">BOPP Bags</h4>
              <p>
                Glossy, moisture-resistant bags ideal for packaging food grains, feed, and FMCG goods.
              </p>
            </div>
            <div className="bg-white border p-6 rounded shadow hover:shadow-lg transition text-center">
              <BadgeCheck className="mx-auto text-[#F9A825]" size={40} />
              <h4 className="text-xl font-semibold mt-4 mb-2">Customized Solutions</h4>
              <p>
                Tailor-made packaging solutions to suit your industry and branding needs.
              </p>
            </div>
          </div>
        </section>
  
        {/* Core Values */}
        <section className="bg-[#F5F5F5] px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div>
                <BadgeCheck className="mx-auto text-[#F9A825]" size={36} />
                <h4 className="font-semibold text-xl mt-3 mb-1">Quality</h4>
                <p>Uncompromised quality across all our offerings.</p>
              </div>
              <div>
                <ShieldCheck className="mx-auto text-[#F9A825]" size={36} />
                <h4 className="font-semibold text-xl mt-3 mb-1">Integrity</h4>
                <p>Honesty and transparency in all business dealings.</p>
              </div>
              <div>
                <PackageCheck className="mx-auto text-[#F9A825]" size={36} />
                <h4 className="font-semibold text-xl mt-3 mb-1">Customer Satisfaction</h4>
                <p>We go the extra mile to exceed client expectations.</p>
              </div>
              <div>
                <Globe className="mx-auto text-[#F9A825]" size={36} />
                <h4 className="font-semibold text-xl mt-3 mb-1">Innovation</h4>
                <p>Continual improvement through technology and design.</p>
              </div>
              <div>
                <Recycle className="mx-auto text-[#F9A825]" size={36} />
                <h4 className="font-semibold text-xl mt-3 mb-1">Sustainability</h4>
                <p>Committed to eco-friendly practices for future generations.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <p className="max-w-3xl mx-auto text-lg">
            At Mayank Packaging, we combine trust, innovation, and quality to provide packaging
            solutions that are not only functional and cost-effective but also enhance your brand’s
            image in a sustainable way.
          </p>
        </section>
      </div>
    );
  }
  