import LinkedinLogo from "../assets/LinkedinLogo";
import "./mainHeader.css";
import SearchIcon from "../assets/SearchIcon.svg";
import HomeLogo from "../assets/HomeLogo";
import ConnectLogo from "../assets/ConnectLogo";
import JobLogo from "../assets/JobLogo";
import MessageLogo from "../assets/MessageLogo";
import NotificationLogo from "../assets/NotificationLogo";
import PostAJobLogo from "../assets/PostAJobLogo";
import WorkLogo from "../assets/WorkLogo";
const dimention = {
  height: "24px",
  width: "24px",
};
const options = [
  { component: <HomeLogo height={dimention.height} width={dimention.width} />, title: "Home" },
  { component: <ConnectLogo height={dimention.height} width={dimention.width} />, title: "My Network" },
  { component: <JobLogo height={dimention.height} width={dimention.width} />, title: "Jobs" },
  { component: <MessageLogo height={dimention.height} width={dimention.width} />, title: "Messaging" },
  { component: <NotificationLogo height={dimention.height} width={dimention.width} />, title: "Notifications" },
  { component: <WorkLogo height={dimention.height} width={dimention.width} />, title: "Work" },
  { component: <PostAJobLogo height={dimention.height} width={dimention.width} />, title: "Post a Job" },
];
function Header() {
  return (
    <div className="header xy--center">
      <div className="header__linkedLogo">
        <LinkedinLogo width={"35px"} height={"35px"} />
      </div>
      <div className="header__searchBar">
        <img src={SearchIcon} alt="search icon" className="header__searchBar__searchIcon" />
        <input type="text" placeholder="search" />
      </div>
      <div className="header__headerOptions flex-direction-row b">
        {options.map((option, index) => (
          <div className="header__headerOptions__option xy--center flex-direction-column button--hover-cursor b" key={index}>
            {option.component}
            <h3 className="title">{option.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
