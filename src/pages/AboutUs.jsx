import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className="bg-black text-white min-h-screen">

        {/* Page Header */}
        <section className="max-w-5xl mx-auto px-6 pt-28 pb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-sky-500">CodiAI</span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            CodiAI is a next-generation learning platform that leverages
            artificial intelligence to simplify coding education, enhance
            problem-solving skills, and prepare learners for real-world
            technology careers.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-sky-500">
              Our Mission
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Our mission is to empower students and aspiring developers by
              providing intelligent, personalized, and accessible learning
              experiences that make technology education effective and
              engaging.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-sky-500">
              Our Vision
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              We envision a future where anyone, regardless of background, can
              confidently learn to code and build meaningful solutions using
              modern technologies.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10">
            What <span className="text-sky-500">CodiAI</span> Offers
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Tutor",
                desc: "Instant guidance, explanations, and coding support powered by advanced AI to help learners overcome challenges in real time.",
              },
              {
                title: "Personalized Learning Paths",
                desc: "Adaptive roadmaps tailored to individual skill levels, learning pace, and career goals.",
              },
              {
                title: "Hands-On Coding Practice",
                desc: "Real-world coding exercises and projects that bridge the gap between theory and industry requirements.",
              },
              {
                title: "Career-Ready Skills",
                desc: "Focused learning experiences designed to build practical, job-oriented programming skills.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-sky-500 transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-sky-400">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Statement */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            At <span className="text-white font-medium">CodiAI</span>, we believe
            learning should be practical, intelligent, and accessible. Our
            platform is built to support learners at every stage of their
            journey—from fundamentals to advanced development.
          </p>
        </section>

        {/* Stats Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              { value: "10K+", label: "Active Learners" },
              { value: "50+", label: "Learning Modules" },
              { value: "24/7", label: "AI Support" },
              { value: "100%", label: "Skill-Focused Learning" },
            ].map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl font-extrabold text-sky-500">
                  {stat.value}
                </h3>
                <p className="text-zinc-400 mt-2 text-sm">
                  {stat.label}
                </p>
              </div>
              ))}
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
