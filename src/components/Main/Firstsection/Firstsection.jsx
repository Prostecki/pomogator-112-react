import "./Firstsection.css";
import Button from "./Buttons/Button";
const Firstsection = () => {
  const telNum = "+7(995)911-112-5";
  const textForm = "Вызвать мастера";
  return (
    <section className="first-presenting-section">
      <div className="background-wrapper"></div>
      <div className="first-presenting-box-info">
        <article className="first-section-safety-article">
          Когда в жизни закрывается одна дверь - мы приедем и откроем её!
        </article>
        <h1 className="first-section-headline">
          Ваши потребности — наш приоритет
        </h1>
        <Button>{telNum}</Button>
        <Button>{textForm}</Button>
      </div>
    </section>
  );
};

export default Firstsection;
