import React, {createContext, useState, useEffect} from 'react'
import axios from "axios"


export const UserContext = createContext()
 export default function UserProvider({children}) {
const [isVerified, setIsVerified] = useState(false)
const [isAdmin, setIsAdmin] = useState(false)
// States----------------------------
const emptyUserState = {
  accountType: "",
  firstName: "",
  lastName: "",
  title: "",
  email: "",
  mobile: "",
  location: "",
  github: "",
  linkedin: "",
  facebook: "",
  instagram: "",
  otherSocials: "",
  otherWebsites: "",
  profilePic: "",
  password: "",
  signupDate: "",
  aboutUser: "",
  workExperience:[
    {
      startDate:'',
      endDate:'',
      companyName:'',
      position:'',
      responsibilities:''
    },
  ]
}
   console.log(localStorage);
// setting Hooks-------------------------
const [user, setUser] = useState(emptyUserState)
const [msg,setMsg] = useState({})
console.log("useContext user after update", user);

if (isVerified === true && localStorage.getItem("currentToken")) {
  setTimeout(() => {
    window.localStorage.setItem("currentToken", " ");
    setIsVerified(false);
  }, 10000 * 1);
}

console.log("isVerified is...",isVerified);

// userEffect----------------------------

//  const getUser=()=> {
  useEffect(() => {
   if (isVerified===true && localStorage.getItem("currentToken") !==null) {
    axios
      .get("http://localhost:5001/admin/getUser", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("currentToken"),
        },
      })
      .then((data) => {
        const { result, msg } = data.data;
        console.log("this is the data from UserContext", data.data.result);
        setMsg(msg);
        setUser({
          _id: result._id,
          accountType: result.accoutType,
          firstName: result.firstName,
          lastName: result.lastName,
          title: result.title,
          email: result.email,
          mobile: result.mobile,
          location: result.location,
          github: result.github,
          linkedin: result.linkedin,
          facebook: result.facebook,
          instagram: result.instagram,
          otherSocials: result.otherSocials,
          otherWebsites: result.otherWebsites,
          profilePic: result.profilePic,
          password: result.password,
          signupDate: result.signupDate,
          aboutUser: result.aboutUser,
          workExperience: result.workExperience,
        });
        setIsAdmin(true);
      });
  } else {
    console.log(" you are probably logged out/ no user set");
  }
  }, [])
  
 
    // }
  
  return (
    <UserContext.Provider
      value={{
        emptyUserState,
        user,
        setUser,
        isVerified,
        isAdmin,
        setIsVerified,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}



