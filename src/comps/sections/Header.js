import React from 'react'
import ProfileImgSec from "./ProfileImgSec";

function Header({page, children}) {
  console.log(page);
  return (
    <div className={page === "HomePage" ? "homeHeaderContainer": "headerContainer"}
    >
      {/* ProfilePage Display */}
      {page === "ProfilePage" ? (
        <> </>) : ("")}

      {/* Homepage display.... */}
      {page === "HomePage" ? (
        <>
          {" "}
          <div className="headerText1">
            <h1>Welcome to Profile</h1>
            <p>the platform for your personal profile</p>
            <p style={{fontSize:"10px"}}>- by Jeremiah Brown</p>
          </div>{" "}
        </>
      ) : (
        ""
      )}

      {children}
      {/* display profile pic on Home page */}
    </div>
  );
}

export default Header
