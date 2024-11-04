import "./RunningLine.css";
const RunningLine = () => {
  const uniqueText = [
    "Восстановление дверей после МЧС",
    "Вскрытие замков",
    "Вскрытие авто",
    "Замена замков",
  ];
  return (
    <section className="running-line-container">
      <div className="running-line-content">
        {uniqueText.map((text, index) => (
          <p className="running-line" key={index}>
            {text}
          </p>
        ))}
        {uniqueText.map((text, index) => (
          <p className="running-line" key={index}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default RunningLine;
