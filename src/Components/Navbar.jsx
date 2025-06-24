import { useEffect, useState } from "react";

const sections = ["about", "skills", "projects", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on item click (mobile)
  };

  return (
    <nav className="bg-offWhite fixed w-full z-20 top-0 start-0 font-poppins text-sm shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <span className="text-2xl font-cursive">Aditya Pandey</span>

        <button
          onClick={toggleMenu}
          className="md:hidden block text-gray-700 text-2xl"
        >
          ☰
        </button>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-offWhite md:static md:flex md:flex-row md:space-x-8 md:bg-transparent md:w-auto transition-all duration-300 ease-in-out z-50`}
        >
          {sections.map((id) => (
            <li key={id} className="border-b md:border-none">
              <button
                onClick={() => scrollTo(id)}
                className={`block w-full text-left px-4 py-3 font-semibold ${
                  activeSection === id
                    ? "text-teal"
                    : "text-gray-900 hover:text-teal"
                }`}
              >
                {activeSection === id
                  ? `(${id.charAt(0).toUpperCase() + id.slice(1)})`
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
