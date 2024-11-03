import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="name-company">
          <p id="header-animate-paragraph">Помогаем людям 24/7</p>
          <h1>
            <span className="blue-text">Вcкрыть </span>
            <span className="red-text">дверь</span>.ру
          </h1>
          <a href="tel:" className="call-mobile-header">
            📞 020 74 24 70
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
