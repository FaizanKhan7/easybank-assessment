import WhyUsCard from "../WhyUsCards/WhyUsCard";
import "./whyUs.css";

function WhyUs() {
  return (
    <div className="whyWrapper">
      <div className="whyContent">
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your finatial
          hub. Control your finaces like never before.
        </p>
        <WhyUsCard />
      </div>
    </div>
  );
}

export default WhyUs;
