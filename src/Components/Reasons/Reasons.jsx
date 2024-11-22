import "./Reasons.css";
// import all images
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="reasons__left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="reasons__right">
        <span>some reasons</span>
        <h2>
          <span className="stroke__text">Why</span> choose us?
        </h2>
        <div className="right__details">
          <div>
            <img src={tick} alt="tick__img" />
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="tick__img" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="tick__img" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="tick__img" />
            <span>reliable partners</span>
          </div>
        </div>
        <span style={{color:'var(--gray)', fontWeight:"normal"}}>OUR PARTNERS</span>
        <div className="partners">
            <img src={nb} alt="nb__img" />
            <img src={adidas} alt="adidas__img" />
            <img src={nike} alt="nike__img" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
