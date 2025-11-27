function Navigation() {
  return (
    <nav>
      <ul
        className="flex gap-7 items-center [&>li>a]:block 
                     [&>li>a]:py-7 
                     [&>li>a]:text-sm 
                    [&>li>a]:text-black
                     [&>li>a]:leading-none"
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
    </nav>
  );
}

export default Navigation;
