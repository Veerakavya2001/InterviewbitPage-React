import "./learners.scss";
import scaleracademy from "../../Assests/images/scaler-academy.jpg";
import banner2 from "../../Assests/images/banner2.png";
import rank from "../../Assests/images/rankimg.png";
//company-logos
import googlelogo from "../../Assests/company-logos/googlelogo.png";
import microsoftlogo from "../../Assests/company-logos/microsoftlogo.png";
import amazonlogo from "../../Assests/company-logos/amazonlogo.png";
import paypal from "../../Assests/company-logos/paypal.png";
import walmart from "../../Assests/company-logos/walmartlogo.png";
import mindtickle from "../../Assests/company-logos/mindtickle.png";

export default function Learners() {
  //array  of objects for company-logos
  const company_logos = [
    { image: googlelogo, alt: "google" },
    { image: microsoftlogo, alt: "microsoftlogo" },
    { image: amazonlogo, alt: "amazon" },
    { image: paypal, alt: "paypal" },
    { image: walmart, alt: "walmart" },
    { image: mindtickle, alt: "mindtickle" },
  ];
  return (
    <div>
      <div className="learners-details">
        <div className="learners-count">
          <span>Join</span>
          <span>1 million+</span>
          <span>learners</span>
        </div>
      </div>
      <div className="mock-interview">
        <div className="left-text">
          <div className="banner-heading"> Unsure Where To Start DSA Prep?</div>
          <div className="banner-heading rejected-heading">
            Or Getting Rejected At Tech Interviews?
          </div>
          <div className="banner-heading">Take Our</div>
          <div className="free-coding-sec">
            <span className="coding-sec">Free Mock Coding Interview</span>
          </div>
          <div className="banner-heading">For Software Engineers</div>
          <div>
            <button className="btns">Attempt Now</button>
          </div>
        </div>
        <div>
          <div className="scaler-logo">
            <img src={scaleracademy} alt="scaleracademy" />
          </div>
          <div>
            <img className="poster-img" src={banner2} alt="banner" />
          </div>
        </div>
      </div>
      <div className="banner-bottom-part">
        <div className="banner-bottom-text">Our Learners work at</div>
        <div>
          {company_logos.map((companylogo) => (
            <img
              className="company_logos"
              src={companylogo.image}
              alt={companylogo.alt}
            />
          ))}
        </div>
      </div>
      <div className="ranking">
        <div>
          <img className="rankingimg" src={rank} alt="rank" />
        </div>
        <div>
          <div className="rank-title" >
            <span>What makes</span>
            <span className="rank-text">InterviewBit No. 1</span>
          </div>
          <div className="rank-subtitle">Resource for tech interview preparation</div>
        </div>
      </div>
      <div className="course-heading">
        <span>Live Webinars and Masterclass</span>
      </div>
    </div>
  );
}
