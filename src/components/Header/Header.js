import "./Header.scss";
import logo from "../../Assests/images/interviewbitlogo.jpg";
import searchicon from "../../Assests/images/searchbar.svg";
export default function Header() {
  return (
    <div className="header-section">
      <div className="top-description">
        <span>Get a Free personalised Career Roadmap from Scaler</span>
        <a className="link" href="https://www.scaler.com">
          Show My Career Plan
        </a>
      </div>
      <header className="header-site">
        <div className="header-left-site">
          <div>
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="nav-bars">
            <span className="nav">Pratice</span>
            <span className="nav">Contests</span>
            <span className="nav">
            <span>Events</span>
            <span className="new">New</span>
            </span>
             <span className="nav">Scaler</span>
          </div>
          <div>
          <img className="search-icon" src={searchicon} alt="Searchimg" />
          <input className="search-bar" placeholder="Search interviewbit.com" />
        </div>
        </div>
        <div>
          <button className="btns">Sign In</button>
        </div>
      </header>
    </div>
  );
}
