import "./FeedbackForm.css";

const FeedbackForm = ({ onClose }) => {
  return (
    <section
      className="feedback-form-container"
      onClick={onClose} // Закрывает модал при клике на фон
    >
      <div
        className="feedback-form-content"
        onClick={(e) => e.stopPropagation()} // Предотвращает закрытие при клике внутри модала
      >
        <div onClick={onClose} className="close-modal">
          X
        </div>
        <h1>Попали в просак? Свяжитесь с нами через форму обратной связи!</h1>
        <form id="contact-form" method="post">
          <div>
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Введите ваше имя"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Контактный телефон:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Введите номер телефона"
              required
              pattern="[0-9]{11}"
            />
          </div>
          <div>
            <label htmlFor="message">Сообщение:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Введите ваше сообщение"
              required
            ></textarea>
          </div>
          <div className="checkbox-container">
            <label htmlFor="urgent">Срочно</label>
            <input type="checkbox" id="urgent" name="urgent" />
          </div>
          <button className="form-submit" type="submit">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
