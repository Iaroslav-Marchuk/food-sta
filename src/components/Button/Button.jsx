function Button({
  children,
  onClick,
  disabled = false,
  type = 'button',

  ariaLabel,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
