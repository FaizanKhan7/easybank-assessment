import "./hero.css";
import MobileMockups from "../../images/image-mockups.png";
import Btn from "../Button/Btn";
import { Media } from "react-bootstrap";
function Hero() {
  return (
    <div className="heroWrapper">
      <div className="heroBg">
        <img src={MobileMockups} alt="" />
      </div>
      <div className="heroContent">
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
