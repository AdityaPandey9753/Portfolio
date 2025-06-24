import Image from "../assets/images/img.png";
import Resume from "../assets/files/Aditya_Resume.pdf"

const HeroSection = () => {
  return (
    <section
      id="about"
      className="bg-offWhite w-full px-4 sm:px-6 lg:px-20 font-poppins py-10 md:py-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="relative flex justify-center items-center">
          <img
            src={Image}
            alt="Aditya"
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full object-cover"
          />
        </div>
        <div className="space-y-6 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hey There, <br />
            I’m <span className="text-teal">Aditya</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl font-medium leading-snug">
            Creating seamless experiences. Building with purpose.
          </p>
          <span className="flex-col gap-10 items-center sm:flex">
            {/* Email */}
            <p className="text-red-500 text-md font-semibold">
              aditya.pandey9753@gmail.com
            </p>
            <a
              href={Resume}
              download
              className="inline-block px-6 py-3 bg-teal text-white rounded-md shadow-md hover:bg-[#155f5b] transition-all duration-300 text-sm font-medium"
            >
              Download Resume
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
