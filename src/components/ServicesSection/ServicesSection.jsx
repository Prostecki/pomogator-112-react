// ServicesSection.jsx
import "./ServicesSection.css";
import OneService from "./OneService";

const ServicesSection = () => (
  <section className="services">
    <article className="headline-services">
      Наши основные виды деятельности
    </article>
    <OneService imgSrc="installation.png" altText="Commercial Locksmith" />
    <OneService imgSrc="auto_locks.png" altText="Residential Locksmith" />
    <OneService imgSrc="urgent_opening.png" altText="Automotive Locksmith" />
  </section>
);

export default ServicesSection;
