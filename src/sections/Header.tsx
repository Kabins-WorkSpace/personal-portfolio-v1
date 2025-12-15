export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 left-0 right-0 z-50">
      <nav className="flex p-0.5 gap-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="https://www.linkedin.com/in/kabin7/"
          rel="noopener noreferrer"
          target="_blank"
          className="nav-item rounded-full bg-white text-gray-900 font-bold hover:bg-white/80 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
