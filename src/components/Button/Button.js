const Button = ({ type, handleClick, buttonText, className }) => {
  return (
    <button type={type} onClick={handleClick} className={className}>
      {buttonText}
    </button>
  );
};

export default Button;
