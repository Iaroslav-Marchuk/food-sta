function PrivacyList() {
  return (
    <ul className="flex justify-between [&>li>a]:block [&>li>a]:text-[10px] [&>li>a]:cursor-pointer text-(--dark-green) underline mb-10">
      <li>
        <a href="">Privacy Policy</a>
      </li>
      <li>
        <a href="">Terms of Service</a>
      </li>
      <li>
        <a href="">Cookies Settings</a>
      </li>
    </ul>
  );
}

export default PrivacyList;
