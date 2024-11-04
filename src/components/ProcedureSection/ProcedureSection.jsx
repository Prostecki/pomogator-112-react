import "./ProcedureSection.css";

const ProcedureSection = () => (
  <section className="procedure">
    <h1>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ipsam soluta
      illum cumque vel exercitationem.
    </h1>
    <div className="procedure-container">
      {[
        "clipboard.png",
        "search.png",
        "mobile.png",
        "car.png",
        "door.svg",
        "flags.svg",
        "smile.svg",
      ].map((imgSrc, index) => (
        <div key={index} className="procedure-icon">
          <img src={`images/${imgSrc}`} alt="" />
        </div>
      ))}
    </div>
  </section>
);

export default ProcedureSection;
