import React from "react";

const Mission = () => {
  const teamMembers = [
    {
      name: "Sumon Das",
      image: "/image1.jpg",
      role: "Developers & Storytellers",
      description:
        "Passionate about using technology to communicate scientific truths",
    },
    {
      name: "Abanti Dutta Athoy",
      image: "/image2.jpg",
      role: "Developers & Storytellers",
      description:
        "Passionate about using technology to communicate scientific truths",
    },
    {
      name: "Labiba Faiza Karim",
      image: "/image3.jpg",
      role: "Developers & Storytellers",
      description:
        "Passionate about using technology to communicate scientific truths",
    },
    {
      name: "Tahrina Siddika Sumaiya",
      image: "/image4.jpg",
      role: "Developers & Storytellers",
      description:
        "Passionate about using technology to communicate scientific truths",
    },
    {
      name: "Md. Tahminnuzzaman Nahian",
      image: "/image5.jpg",
      role: "Developers & Storytellers",
      description:
        "Passionate about using technology to communicate scientific truths",
    },
  ];

  const technologies = [
    { name: "React", purpose: "Interactive Web Framework" },
    { name: "TailwindCSS", purpose: "Modern Styling" },
    { name: "NASA APIs", purpose: "Satellite Data & Imagery" },
    { name: "AOS.js", purpose: "Scroll Animations" },
    { name: "React Router", purpose: "Navigation" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            About This Project
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Transforming satellite data into human stories
          </p>
        </div>

        {/* Project Overview */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12 fade-in">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">
            The What & Why
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              "The Pale Blue Dot, Revisited" is our submission for the NASA
              Space Apps "Create Your Own Challenge." While many projects focus
              on building analytical tools, we chose a different path:
              storytelling.
            </p>
            <p>
              We believe that the most powerful satellite data often gets lost
              in technical complexity. Our mission was to transform decades of
              Earth observation into an emotional, immersive journey that anyone
              can understand and feel.
            </p>
            <p>
              By giving voice to the silent observers orbiting above us, we hope
              to reconnect people with the profound reality of our shared home
              and the changes it's undergoing.
            </p>
            <p className="text-blue-400 font-semibold">
              This isn't just data visualization—it's data humanization.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12 fade-in">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">
            Team LunaSol
          </h2>
          <div className="grid gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image || "https://via.placeholder.com/150"}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 mb-2">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12 fade-in">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">
            Technology & Data
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Built With
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="font-semibold text-white">{tech.name}</div>
                  <div className="text-gray-400 text-sm">{tech.purpose}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Special Thanks
            </h3>
            <p className="text-gray-300 mb-4">
              This project would not be possible without NASA's commitment to
              open data and scientific transparency. We extend our gratitude to:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>
                • NASA's Earth Science Division for decades of satellite
                observations
              </li>
              <li>
                • The Landsat program for continuous Earth monitoring since 1972
              </li>
              <li>
                • NASA's Open Data Policy for making this information freely
                available
              </li>
              <li>
                • The scientific community for their tireless work in
                understanding our planet
              </li>
            </ul>
          </div>
        </div>

        {/* Project Repository */}
        <div className="text-center fade-in">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Open Source</h3>
            <p className="text-gray-300 mb-6">
              We believe in transparency and collaboration. The complete source
              code for this project is available for anyone to explore, learn
              from, and build upon.
            </p>
            <a
              href="https://github.com/Beelzebub536/The-Pale-Blue-Dot-Revisited"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Project Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
