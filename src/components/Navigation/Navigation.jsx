function Navigation({ className = '' }) {
  return (
    <ul
      className={`flex items-center [&>li>a]:block 
                     [&>li>a]:text-sm 
                    [&>li>a]:text-black
                    [&>li>a]:py-1
                     [&>li>a]:leading-none ${className}`}
    >
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#service">Service</a>
      </li>
      <li>
        <a href="#menu">Menu</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}

export default Navigation;
