import "./MainContent.scss";
import arrow from "../../Assests/images/right-arrow.svg";
import peopleposter from "../../Assests/images/people.png";
export default function MainContent() {
 
  return (
      <div className="banner">
        <div>
        <div className="banner-title"> Everything you need to crack your</div>
        <div className="banner-discription">Next Tech Interview</div>
        <button className="btns">
          <div class="btnsinside">
            <div className="btn-text">Get Start For Free</div>
            <div>
              <img className="Arrow-symbol" src={arrow} alt="arrow" />
            </div>
          </div>
        </button>
        <div>
          <img class="banner-img" src={peopleposter} alt="banner" />
        </div>
        </div>
       
      </div>
   
  
  );
}
