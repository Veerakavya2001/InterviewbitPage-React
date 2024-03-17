import "./praticeproblems.scss";
//importing images
import programming from "../../Assests/praticeproblemsimgs/programming.png";
import datascience from "../../Assests/praticeproblemsimgs/datas.png";
import systemdesign from "../../Assests/praticeproblemsimgs/systemdesign.png";
import database from "../../Assests/praticeproblemsimgs/databases.png";
import puzzles from "../../Assests/praticeproblemsimgs/puzzles.png";
import scripting from "../../Assests/praticeproblemsimgs/scripting.png";
export default function PraticeProblems() {
  const praticeimgs = [
    { image: programming, title: "Programming" },
    { image: datascience, title: "Data Science" },
    { image: systemdesign, title: "System Design" },
    { image: database, title: "Databases" },
    { image: puzzles, title: "Puzzle" },
    { image: scripting, title: "Scripting" },
  ];
  return (
    <div className="card-content">
      <div className="card-heading">
        <span className="section-count">800+ problems </span>
        <span>for practice</span>
      </div>
      <div className="praticeproblemssection">
        {praticeimgs.map((item)=>(
            <div className="pratice-section">
               <img className="card-imgs" src={item.image} alt={item.title}/>
               <div>{item.title}</div>
            </div>
        ))}
      </div>
      <div className="cards-down-heading">
        start solving now
      </div>
    </div>
  );
}
