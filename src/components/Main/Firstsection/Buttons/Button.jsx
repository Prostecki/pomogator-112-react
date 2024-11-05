// Button.jsx
const Button = ({ onClick, children }) => (
  <button onClick={onClick} className="call-to-locksmith button">
    {children}
  </button>
);

export default Button;
