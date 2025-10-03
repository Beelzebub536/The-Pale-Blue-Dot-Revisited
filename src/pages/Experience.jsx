import React, { useEffect, useState } from "react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ParallaxSection from "../components/ParallaxSection";

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-16">
      {/* Scroll Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-gray-800 z-40">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        {/* Optional gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-black/90"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            The Pale Blue Dot,
            <span className="block text-blue-400 mt-2">Revisited</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Scroll to Begin Transmission
          </p>

          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Act I - The Awakening */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* 🔹 Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* 🔹 Overlay (optional for better contrast) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-blue-900/40"></div>

        {/* 🔹 Content */}
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
            Act I: The Awakening
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            "I am but a collection of circuits and sensors, orbiting silently in
            the cold vacuum. For decades, I have watched over this pale blue
            dot. Today, I share what I've seen..."
          </p>

          {/* You can add other content below if needed */}
        </div>
      </section>

      {/* Act II - The Revelations */}
      <section className="min-h-screen py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-red-400 mb-16 fade-in">
            Act II: The Revelations
          </h2>

          {/* Glaciers Section */}
          <div className="mb-20 fade-in">
            <h3 className="text-2xl font-bold text-gray-300 mb-6">
              The Vanishing Ice
            </h3>
            <BeforeAfterSlider
              beforeImage="/qorikalis1978jpg.jpg"
              afterImage="/qorikalis2004.jpg"
              beforeLabel="1978"
              afterLabel="2004"
            />
            <p className="text-gray-400 mt-4 text-center">
              Drag to see how our glaciers have retreated over the decades
            </p>
          </div>

          {/* Ozone Section */}
          <div className="mb-20 fade-in">
            <h3 className="text-2xl font-bold text-gray-300 mb-6 text-start">
              Ozone Hole
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Before Image */}
              <div className="text-center">
                <div className="aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="ozone_1979.jpg"
                    alt="ozone_1979"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 mt-2">ozone_1979</p>
              </div>

              {/* After Image */}
              <div className="text-center">
                <div className="aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="ozone_2018_lrg.png"
                    alt="ozone_2018"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 mt-2">ozone_2018</p>
              </div>
            </div>

            <p className="text-gray-400 mt-4 text-center">
              Witness the dramatic clearing of pollution during global lockdowns
            </p>
          </div>

          {/* Bangladesh Delta Section */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-gray-300 mb-6">
              Our Home - The Bangladesh Delta
            </h3>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="Bengal delta.jpg"
                alt="Bangladesh Delta Satellite View"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-3 rounded-lg max-w-md">
                <p className="text-gray-300 text-sm">
                  "This fragile, beautiful delta - home to millions, sustained
                  by mighty rivers, threatened by rising seas. I see its
                  delicate balance every day."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Act III - The Zoom Out */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        speed={0.3}
      >
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Act III: Perspective
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            "As I pull back, your world shrinks. Cities vanish, mountains
            flatten, oceans become thin blue lines. Until all that remains..."
          </p>
        </div>
      </ParallaxSection>

      {/* Final Message */}
      <section
        className="min-h-screen flex items-center justify-center bg-black relative bg-cover bg-center"
        style={{ backgroundImage: "url('/final.jpg')" }}
      >
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Glowing pulse dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse shadow-2xl shadow-blue-400/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto fade-in">
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
            "...is a mote of dust, suspended in a sunbeam."
          </p>
          <p className="text-lg text-gray-500 italic">
            - Adapted from Carl Sagan's "Pale Blue Dot"
          </p>

          <div className="mt-12">
            <a
              href="/data"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-lg"
            >
              Explore the Data
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
