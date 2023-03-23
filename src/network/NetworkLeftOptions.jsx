import React from "react";
import ConnectLogo from "../assets/ConnectLogo";
import ContactsLogo from "../assets/ContactsLogo";
import FollowersLogo from "../assets/FollowersLogo";
import "./networkOptions.css";
const options = [
  {
    icon: <ConnectLogo height={"25px"} width={"25px"} />,
    title: "Connections",
    totalNumber: 882,
  },
  {
    icon: <ContactsLogo height={"25px"} width={"25px"} />,
    title: "Contacts",
    totalNumber: 92,
  },
  {
    icon: <FollowersLogo height={"25px"} width={"25px"} />,
    title: "Followings and followers",
    totalNumber: 105,
  },
];
function NetworkLeftOptions() {
  return (
    <div className="networkOptions">
      <div className="networkOptions__container">
        <div className="networkOptions__title">Manage my network</div>
        {options.map((el) => {
          return (
            <div className="networkOptions__row">
              <div className="networkOptions__left">
                <div className="networkOptions__row__icon">{el.icon}</div>
                <div className="networkOptions__row__title">{el.title}</div>
              </div>
              <div className="networkOptions__row__number">{el.totalNumber}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NetworkLeftOptions;
