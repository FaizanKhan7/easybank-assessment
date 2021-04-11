import "./hero.css";
import MobileMockups from "../../images/image-mockups.png";
import Btn from "../Button/Btn";
function Hero() {
  return (
    <div className="d-md-flex flex-row-reverse justify-content-center heroWrapper">
      <div className="d-flex justify-content-center heroBg">
        <img src={MobileMockups} alt="" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center  align-items-md-start heroContent">
        <h2>Next generation digital banking</h2>
        <p>
          Take your finalcial life online. Your Easybank account will be a
          one-stop-shop for spending. saving, budgeting, investing, and much
          more.
        </p>
        <Btn style={{ display: "block" }} />
      </div>
    </div>
  );
}

export default Hero;
