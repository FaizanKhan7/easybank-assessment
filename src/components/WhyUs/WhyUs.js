import WhyUsCard from "../WhyUsCards/WhyUsCard";
import Online from "../../images/icon-online.svg";
import Budget from "../../images/icon-budgeting.svg";
import Onboard from "../../images/icon-onboarding.svg";
import OpenApi from "../../images/icon-api.svg";
import "./whyUs.css";

function WhyUs() {
  return (
    <div className="mainWrapper">
      <div className="d-flex flex-column justify-content-center text-center justify-content-md-start text-md-left  whyWrapper">
        <div className="whyContent">
          <h1>Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            finatial hub. Control your finaces like never before.
          </p>
          <div className="d-md-flex justify-content-around flex-wrap WhyusWrapper">
            <WhyUsCard
              whyCardImg={Online}
              whyHeading="Online Banking"
              whyContent="Our modern and Mobile applications allow you to keep track of your finances wherever you are in the world."
            />
            <WhyUsCard
              whyCardImg={Budget}
              whyHeading="Simple Budgeting"
              whyContent="See exactly where your money goes each month. Receive notifications when you're close to your hitting
            limits."
            />
            <WhyUsCard
              whyCardImg={Onboard}
              whyHeading="Fast Onboarding"
              whyContent="We dont't do branches. Open your account in minutes online and start taking control of your finances right
                away."
            />
            <WhyUsCard
              whyCardImg={OpenApi}
              whyHeading="Open API"
              whyContent="Manage your saving, investments, pensions, and much more from one account. Tracking your money has never
            been easier."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
