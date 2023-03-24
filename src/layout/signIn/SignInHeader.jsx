import React from "react";
import LinkedInFullLogo from "../../assets/LinkedInFullLogo";
import "./signInHeader.css";
function SignInHeader() {
  return (
    <div className="signIn__header">
      <div className="signIn__headerContainer">
        <LinkedInFullLogo width={"auto"} height={"30"} fill={"var(--color-brand)"} />
        <div className="signIn__headerOptions">
          <div className="verticleLine"></div>
          <button className="joinNowBtn">Join now</button>
          <button className="signInBtn">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default SignInHeader;
