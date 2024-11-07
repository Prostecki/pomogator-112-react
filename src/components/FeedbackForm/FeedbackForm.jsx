import "./FeedbackForm.css";

const FeedbackForm = ({ show, onClose }) => {
  show
    ? document.body.classList.add("no-scroll")
    : document.body.classList.remove("no-scroll");
  return (
    <section
      className="feedback-form-container"
      style={{
        pointerEvents: show ? "auto" : "none",
        opacity: show ? "1" : "0",
        transition: "500ms",
      }}
      onClick={onClose} // Закрывает модал при клике на фон
    >
      <form
        id="contact-form"
        method="post"
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={onClose} className="close-modal">
          ✖️
        </div>
        <h3>Свяжитесь с нами через форму обратной связи!</h3>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Введите ваше имя"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
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
        <div style={{ marginBottom: "15px" }}>
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
          <input
            style={{ textAlign: "start" }}
            type="checkbox"
            id="urgent"
            name="urgent"
          />
        </div>
        <button className="form-submit" type="submit">
          Отправить
        </button>
      </form>
    </section>
  );
};

export default FeedbackForm;
