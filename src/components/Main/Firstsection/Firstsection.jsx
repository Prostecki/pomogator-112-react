import "./Firstsection.css";
import { useState } from "react";
import Button from "./Buttons/Button";
import FeedbackForm from "../../FeedbackForm/FeedbackForm";

const Firstsection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <Button onClick={handleOpenModal}>{textForm}</Button>
        <FeedbackForm show={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
};

export default Firstsection;
