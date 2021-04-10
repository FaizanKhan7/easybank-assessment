import "./whyusCard.css";
import Online from "../../images/icon-online.svg";

function WhyUsCard() {
  return (
    <div className="card">
      <img src={Online} alt="" />
      <h3>Online Banking</h3>
      <p>
        Our modern and Mobile applications allow you to keep track of your
        finances wherever you are in the world.
      </p>
    </div>
  );
}

export default WhyUsCard;
