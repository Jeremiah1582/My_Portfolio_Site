import React from 'react'
import ProfileImgSec from "./ProfileImgSec";

function Header({page, children}) {
  console.log(page);
  return (
    <div
      className={
        page === "HomePage" ? "homeHeaderContainer" : "headerContainer"
      }
    >
      {/* ProfilePage Display */}
      {page === "ProfilePage" ? <> </> : ""}

      {/* Homepage display.... */}
      {page === "HomePage" ? (
        <>
          {" "}
          <div className="headerText1" >
            <h1>Welcome to myProfile</h1>
            <p>the platform for your personal profile</p>
          </div>
          <p className="signature" style={{ fontSize: "10px" }}>
            - by Jeremiah Brown
          </p>{" "}
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
