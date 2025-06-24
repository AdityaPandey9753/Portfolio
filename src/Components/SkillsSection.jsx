import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiNumpy,
  SiPandas,
  SiJupyter,
  /* SiVisualstudiocode, */
  SiApollographql, // used as REST fallback
  SiTailwindcss,
  SiChartdotjs, // representing Matplotlib
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { label: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { label: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { label: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { label: "Python", icon: <FaPython className="text-yellow-400" /> },
  { label: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { label: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { label: "Django", icon: <SiDjango className="text-green-900" /> },
  { label: "REST APIs", icon: <SiApollographql className="text-purple-500" /> },
  { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { label: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { label: "NumPy", icon: <SiNumpy className="text-blue-600" /> },
  { label: "Pandas", icon: <SiPandas className="text-black" /> },
  { label: "Matplotlib", icon: <SiChartdotjs className="text-red-500" /> },
  { label: "Jupyter", icon: <SiJupyter className="text-orange-500" /> },
  { label: "Git", icon: <FaGit className="text-orange-600" /> },
  { label: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  { label: "VS Code", icon: <VscVscode className="text-blue-600" /> },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="bg-offWhite px-4 sm:px-6 lg:px-20 py-12 font-poppins"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <div className="bg-white shadow-sm hover:shadow-md rounded-md p-4 flex flex-col items-center justify-center transition text-center">
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-800">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
