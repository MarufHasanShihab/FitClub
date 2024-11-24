import "./Testimonials.css";
// import all images
import image1 from "../../assets/t-image1.png"
import image2 from "../../assets/t-image2.jpg"
import image3 from "../../assets/t-image3.jpg"
import left_arrow from "../../assets/leftArrow.png"
import right_arrow from "../../assets/rightArrow.png"
import { useState } from "react";
 const testimonialsData = [
  {
    image: image1,
    review:
      "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
    name: 'MATHEW HENDRICKSON',
    status : 'ENTREPRENEUR'
  },
  {
    image: image2,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ',
    name: 'JOHN KEVIN',
    status: 'COACH'
  },
  {
    image : image3,
    review:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem',
    name: 'FRANKLIN',
    status: "CUSTOMER"
  }
];


const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  console.log(selected)
  return (
    <div className="testimonials">
      <div className="testimonials__left">
        <span>Testimonials</span>
        <span className="stroke__text">What they</span>
        <span>say about us</span>
        <p>{testimonialsData[selected].review}</p>
        <span><span style={{color:"var(--orange)"}}>{testimonialsData[selected].name} </span> - {testimonialsData[selected].status}</span>
      </div>
      <div className="testimonials__right">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img onClick={()=>setSelected(prev=>prev === 0? 2:prev-1)} src={left_arrow} className="client__img" />
          <img onClick={()=>setSelected(prev => prev === 2 ? 0:prev + 1)} src={right_arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
