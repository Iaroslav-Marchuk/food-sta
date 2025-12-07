import Navigation from '../Navigation/Navigation.jsx';

function MobileMenu({ onClose }) {
  return (
    <div>
      <Navigation
        onClose={onClose}
        className="flex-col items-start text-base [&>li>a]:py-4"
      />
    </div>
  );
}

export default MobileMenu;
