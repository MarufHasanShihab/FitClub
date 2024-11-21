import Navbar from "../Navbar/Navbar";
import "./Hero.css";
// Import images
import hero_img from "../../assets/hero_image.png";
import hero_back_img from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import heart from "../../assets/heart.png";

const Hero = () => {
  return (
    <div className="hero">
      {/* hero left */}
      <div className="hero__left">
        <Navbar />
        {/* the best ad */}
        <div className="the__best-ad">
          <div></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        {/* hero text */}
        <div className="hero__text">
          <h1>
            <span className="stroke__text">Shape </span>Your <br />
            Ideal body
          </h1>
          <div className="hero__desc">
            <p>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </p>
          </div>
        </div>
        {/* hero figures */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero__buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* hero right */}
      <div className="hero__right">
        {/* hero right button */}
        <button className="btn">Join Now</button>
        {/* hero right heart rate */}
        <div className="heart__rate">
          <img src={heart} alt="heart__image" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/* hero images */}
        <img src={hero_img} alt="" className="hero__img" />
        <img src={hero_back_img} alt="" className="hero__back-img" />
        {/* Calories  */}
        <div className="calories">
          <img src={calories} alt="calories__img" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
