import "./Firstsection.css";
import { useState } from "react";
import Button from "./Buttons/Button"; // Убедитесь, что эта кнопка реализована правильно
import FeedbackForm from "../../FeedbackForm/FeedbackForm";

const Firstsection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для управления модальным окном
  const telNum = "+12345677";
  const textForm = "Вызвать специалиста";

  const handleOpenModal = () => {
    console.log("Кнопка нажата, открываем модал");
    setIsModalOpen(true); // Открытие модального окна
  };

  const handleCloseModal = () => {
    console.log("Закрываем модал");
    setIsModalOpen(false); // Закрытие модального окна
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
