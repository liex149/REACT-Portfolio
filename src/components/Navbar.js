export default function Navbar() {
    return (
        <header >
          <div >
            <div >
              <a href="#about" className="ml-3 text-xl">
                About Me
              </a>
            </div>
            <nav >
              <a href="#projects" className="mr-5 hover:text-white">
                Projects
              </a>
            </nav>
            <a
              href="#contact"
              >
              Contact
             
            </a>
          </div>
        </header>
      );
}
