import "./Firstsection.css";
import { useState } from "react";
import Button from "./Buttons/Button";
import FeedbackForm from "../../FeedbackForm/FeedbackForm";

const Firstsection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const telNum = "+12345677";
  const textForm = "Вызвать специалиста";

  const handleOpenModal = () => {
    console.log("Button clicked, modal opens");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Close modal");
    setIsModalOpen(false);
  };

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
        <Button onClick={handleOpenModal}>{textForm}</Button>
        {isModalOpen && <FeedbackForm onClose={handleCloseModal} />}
        {/* Условная отрисовка модального окна */}
      </div>
    </section>
  );
};

export default Firstsection;
