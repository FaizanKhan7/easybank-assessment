import "./whyusCard.css";

function WhyUsCard({ whyCardImg, whyHeading, whyContent }) {
  return (
    <div className="d-flex flex-column justify-content-center  align-items-center text-center text-md-left justify-content-md-start align-items-md-start   card">
      <img src={whyCardImg} alt="" />
      <h3>{whyHeading}</h3>
      <p>{whyContent} </p>
    </div>
  );
}

export default WhyUsCard;
