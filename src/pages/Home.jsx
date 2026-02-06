import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-black text-white min-h-screen">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build Skills Faster with{" "}
            <span className="text-sky-500">CodiAI</span>
          </h1>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
            <span className="text-white font-medium">CodiAI</span> is an
            AI-powered learning platform designed to help students and
            developers master programming concepts, solve real-world problems,
            and prepare for modern tech careers with confidence.
          </p>

          <div className="mt-12 flex justify-center gap-5 flex-wrap">
            <Link
              to="/learning"
              className="bg-sky-500 hover:bg-sky-600 px-10 py-3 rounded-full font-semibold transition shadow-lg"
            >
              Start Learning
            </Link>

            <Link
              to="/about"
              className="border border-zinc-700 hover:border-sky-500 px-10 py-3 rounded-full font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-sky-500">CodiAI</span>?
          </h2>

          <div className="grid gap-10 md:grid-cols-3">

            {/* Feature 1 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-sky-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-sky-400">
                AI-Powered Learning
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Get instant explanations, intelligent code suggestions, and
                problem-solving guidance powered by advanced AI—available
                anytime you need help.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-sky-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-sky-400">
                Personalized Learning Paths
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                CodiAI analyzes your skill level and learning goals to create
                customized roadmaps, helping you progress step by step without
                confusion.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-sky-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-sky-400">
                Real-World Coding Practice
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Practice with real-world projects, coding challenges, and
                practical examples that bridge the gap between theory and
                industry requirements.
              </p>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
