import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // idle | loading | success | error

  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const ownerTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_OWNER;
    const userTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_USER;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !ownerTemplateID || !userTemplateID || !publicKey) {
      setStatus("error");
      console.error("EmailJS environment variables are missing.");
      return;
    }

    setStatus("loading");

    const formData = new FormData(form.current);
    const user_name = formData.get("user_name");
    const user_email = formData.get("user_email");

    try {
      await emailjs.sendForm(serviceID, ownerTemplateID, form.current, publicKey);
      await emailjs.send(serviceID, userTemplateID, { user_name, to_email: user_email }, publicKey);
      form.current.reset();
      setStatus("success");
    } catch (err) {
      console.error("Email send failed:", err);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-[#004D40]">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-lg mb-12">We'd love to hear from you! Whether you have a question or just want to say hi — feel free to reach out.</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="text-[#F9A825]" />
            <p><strong>Address:</strong> Dewas Naka, Indore, M.P., India</p>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-[#F9A825]" />
            <p><strong>Phone:</strong> +91-9425125228</p>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-[#F9A825]" />
            <p><strong>Email:</strong> mayanktradingservices@gmail.com</p>
          </div>

          <a
            href="https://wa.me/919425125228"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="bg-[#F5F5F5] p-6 rounded-lg shadow space-y-5">
          <div>
            <label htmlFor="user_name" className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#F9A825]"
              placeholder="Rahul Sharma"
              required
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#F9A825]"
              placeholder="Rahul@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#F9A825]"
              placeholder="Your message..."
              required
            />
          </div>

          {/* Feedback */}
          {status === "loading" && <p className="text-yellow-600 text-center">Sending message...</p>}
          {status === "success" && <p className="text-green-600 text-center font-medium">✅ Message sent successfully!</p>}
          {status === "error" && <p className="text-red-600 text-center font-medium">❌ Something went wrong. Please try again later.</p>}

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full bg-[#F9A825] text-[#004D40] font-semibold py-3 rounded hover:bg-yellow-600 transition ${
              status === "loading" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
