import "./tabs.scss";
import scalerlogo from "../../Assests/images/Scaler_Logo_Transparent.png";
import Courses from "../Courses/Courses";
import { useState } from "react";
export default function Tabs() {
  const [selectedTabIndex, setTabIndex] = useState(0);
  const tabslist = ["Software Dev", "Data Science", "All Events"];
  // console.log(tabslist[selectedTabIndex])
  return (
    <div>
      <div className="coureses">
        <span className="courses-event">Events</span>
        <span className="courses-folding">|</span>
        <span className="courses-heading">Powered By</span>
        <div>
          <img className="scaler-logo" src={scalerlogo} alt="scalerlogo" />
        </div>
      </div>
      <div className="tabs-section">
        <div className="tabs-list">
          {tabslist.map((item, index) => (
            <div className="tab-names">
              <span
                onClick={() => setTabIndex(index)}
                className={index === selectedTabIndex && "active"}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
        <div>
          <div className="all-events"> View All</div>
        </div>
      </div>
      <Courses tabindex={selectedTabIndex} tabs={tabslist}/>
    </div>
  );
}
