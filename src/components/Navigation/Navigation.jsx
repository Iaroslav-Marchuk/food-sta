function Navigation({ className = '', onClose }) {
  return (
    <ul
      className={`flex items-center [&>li>a]:block 
                   [&>li>a]:text-black
                    [&>li>a]:py-1
                     [&>li>a]:leading-none ${className}`}
    >
      <li>
        <a href="#home" onClick={onClose}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={onClose}>
          About
        </a>
      </li>
      <li>
        <a href="#service" onClick={onClose}>
          Service
        </a>
      </li>
      <li>
        <a href="#menu" onClick={onClose}>
          Menu
        </a>
      </li>
      <li>
        <a href="#contact" onClick={onClose}>
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
