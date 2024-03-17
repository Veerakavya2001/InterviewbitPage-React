import './Courses.scss'

//importing img for courses
import techworld from "../../Assests/courseimgs/techworld.png";
import irtc from "../../Assests/courseimgs/irtc.png";
import datascience from "../../Assests/courseimgs/datascience.png";
import tableau from "../../Assests/courseimgs/tableau.png";
export default function Courses(props) {
  const courselist = [
    { image: techworld,discription:"How to Brace Yourself for a post-Recession Tech World?",startingdateandtime:"05:00 PM,4th March 2023(IST)" ,domain:"Software Dev"},
    { image: irtc,discription:"High-Level Design of IRCTC",startingdateandtime:"05:00 PM,4th March 2023(IST)",domain:"Software Dev"},
    { image: datascience,discription:"Learn how to Land Data Science Jobs Outside India",startingdateandtime:"05:00 PM,4th March 2023(IST)",domain:"Data Science"},
    { image: tableau,discription:"Learn Tableau For Data Science Roles",startingdateandtime:"05:00 PM,4th March 2023(IST)",domain:"Data Science"},
  ];

  return (
    <div>
     <div className="sections">
        {courselist.map((item) => ((props.tabs[props.tabindex]===item.domain || props.tabs[props.tabindex]==="All Events") &&
          <div className='course'>
            <img className='section-poster' src={item.image} alt="img" />
            <div>{item.discription}</div>
            <div>Starts On :{item.startingdateandtime}</div>
            <div>{item.domain}</div>
          </div>
        ))}
      </div>
   
    </div>
  );
}
