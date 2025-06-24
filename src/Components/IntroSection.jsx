import { useState } from "react";
import { FaUser, FaUserTie  } from "react-icons/fa";

const helpContent = [
  {
    key: "Me",
    title: "Myself",
    description:
      "I’m a passionate full-stack developer and AI/ML enthusiast, currently entering the final year of my B.Tech in Artificial Intelligence & Machine Learning at Bharati Vidyapeeth College of Engineering (August 2025).\nI enjoy building responsive, scalable web applications and exploring how intelligent systems can solve real-world problems. I’m constantly learning, experimenting, and working on personal projects to sharpen my skills and stay industry-ready.",
    icon: <FaUser size={24} className="text-white" />,
    bgColor: "bg-teal",
  },
  {
    key: "work",
    title: "My Role and Approach",
    description:
      "As a full-stack developer and AI/ML enthusiast, I focus on solving real-world problems through code, and I’m always learning how to use technology more effectively.\nWhether it's building a website from scratch, designing a responsive frontend, or experimenting with intelligent features using machine learning — I aim to build solutions that matter.\nWhile I’m early in my journey, I bring a strong commitment to learning, adapting fast, and delivering work that reflects care and clarity.",
    icon: <FaUserTie size={24} className="text-white" />,
    bgColor: "bg-yellow-500",
  },
  /* {
    key: "feature",
    title: "My Work",
    description:
      "Designing visual identities that resonate with your audience. Logos, color palettes, and guidelines that reflect your brand’s voice.",
    icon: <FaPalette size={24} className="text-white" />,
    bgColor: "bg-red-400",
  }, */
];

const IntroSection = () => {
  const [activeKey, setActiveKey] = useState("Me");
  const active = helpContent.find((item) => item.key === activeKey);

  return (
    <section className="bg-offWhite px-4 sm:px-6 lg:px-20 py-12 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Card List */}
        <div className="space-y-5 w-full">
          {helpContent.map((item) => (
            <div
              key={item.key}
              onClick={() => setActiveKey(item.key)}
              className={`flex items-center gap-4 p-4 cursor-pointer rounded-lg shadow-sm hover:shadow-md transition border
                ${
                  activeKey === item.key
                    ? "border-teal bg-offWhite"
                    : "border-gray-100 bg-offWhite"
                }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-md ${item.bgColor}`}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Right Dynamic Content */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {active?.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
            {active?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
