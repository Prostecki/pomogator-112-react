// Service.jsx
import "./OneService.css";

const OneService = ({ imgSrc, altText }) => (
  <div className="service">
    <div className="img-wrapper">
      <img className="service-img" src={`images/${imgSrc}`} alt={altText} />
      <button className="service-more-about">Подробнее</button>
    </div>
  </div>
);

export default OneService;
