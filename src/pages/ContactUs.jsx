import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <div className="bg-black text-white min-h-screen">

        {/* Header */}
        <section className="max-w-6xl mx-auto px-6 pt-28 pb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Get in Touch with <span className="text-sky-500">CodiAI</span>
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg">
            Have a question, feedback, or collaboration idea?  
            Our team is here to help you and respond as quickly as possible.
          </p>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-6 pb-28 grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 text-sky-500">
              Why Contact Us?
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Whether you need support, want to share feedback, or are interested
              in collaborating with us, feel free to reach out. We aim to respond as quickly as possible.
            </p>

            <div className="space-y-6 text-zinc-400">
              {[
                { icon: "📧", title: "Email", desc: "support@codiai.com" },
                { icon: "🌍", title: "Availability", desc: "24/7 AI support & community assistance" },
                { icon: "🎓", title: "For Students", desc: "Guidance, learning support, and feedback" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="hover:translate-x-1 transition-transform duration-200"
                >
                  <p className="font-semibold text-white">{item.icon} {item.title}</p>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-sky-500">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
              />

              <button className="w-full bg-sky-500 hover:bg-sky-600 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg">
                Send Message
              </button>
            </form>
          </div>

        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
