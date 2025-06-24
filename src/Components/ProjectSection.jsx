const projects = [
  {
    title: "AI Powered Farmer’s Marketplace",
    duration: "Jan 2024 - Mar 2024",
    role: "Full Stack Developer",
    description:
      "Built an end-to-end digital platform connecting farmers to local buyers using Django, React, and PostgreSQL. Integrated product listings with user roles for sellers and buyers and added AI powered crop recommendation system.",
    color: "bg-green-500",
  },
  {
    title: "Dental Management System",
    duration: "Apr 2024 - Jun 2024",
    role: "MERN Stack Developer",
    description:
      "Developed a multi-user dental clinic portal using MongoDB, Express, React, and Node.js. Enabled patient records, appointment bookings, and admin dashboard functionalities.",
    color: "bg-yellow-500",
  },
  {
    title: "Diamond Price Prediction",
    duration: "Jul 2024 - Aug 2024",
    role: "ML Developer",
    description:
      "Built a regression-based diamond price prediction model using Python, Pandas, and Scikit-learn. Trained the model on a cleaned dataset with exploratory data analysis and deployed using Streamlit.",
    color: "bg-purple-500",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-offWhite px-4 sm:px-6 lg:px-20 py-12 font-poppins"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Projects
      </h2>

      <div className="relative border-l border-gray-300 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="mb-12 ml-4">
            {/* Dot */}
            <div
              className={`w-4 h-4 rounded-full ${project.color} absolute -left-2 top-2.5`}
            ></div>

            {/* Content */}
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              {/* <p className="text-sm text-gray-500">{project.duration}</p> */}
              <p className="text-sm font-medium text-teal mt-1">
                {project.role}
              </p>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
