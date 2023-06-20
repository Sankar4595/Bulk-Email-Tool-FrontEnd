import React from "react";
import BasePage from "../Base/BasePage";
import profile from "../../assets/userprofile.gif";

const UserProfile = () => {
  return (
    <>
      <BasePage>
        <div className="userprofile">
          <div className="left">
            <img src={profile} alt="userprofile" />
          </div>
          <div className="right"></div>
        </div>
      </BasePage>
    </>
  );
};

export default UserProfile;
