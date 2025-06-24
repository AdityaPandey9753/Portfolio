import Resume from "../assets/files/Aditya_Resume.pdf"

const Footer = () => {
  return (
    <footer className="bg-offWhite px-4 sm:px-6 lg:px-20 py-10 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Column 1: Call to Action */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
            Let’s make something <br /> amazing together.
          </h2>
          <p className="text-lg font-medium">
            Start by <span className="text-red-600 font-bold">saying hi</span>
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="space-y-3 text-sm text-gray-700">
          <p className="font-semibold text-base">Information</p>
          <p>Thane, India</p>
          <a
            href="mailto:aditya10@gmail.com"
            className="block hover:text-teal transition"
          >
            aditya.pandey9753@gmail.com
          </a>
          <a
            href={Resume}
            download
            className="block hover:text-teal transition"
          >
            Download Resume
          </a>
        </div>

        {/* Column 3: Navigation Links */}
        <div className="space-y-3 text-sm text-gray-700">
          <p className="font-semibold text-base">Navigation</p>
          <a href="#about" className="block hover:text-teal transition">
            About
          </a>
          <a href="#skills" className="block hover:text-teal transition">
            Skills
          </a>
          <a href="#projects" className="block hover:text-teal transition">
            Projects
          </a>
          <a href="#contact" className="block hover:text-teal transition">
            Contact
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Aditya Pandey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
