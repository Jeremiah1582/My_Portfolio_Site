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
console.log("useContext user after update", window);

     
// userEffect----------------------------

 const getUser=()=> {
 axios
   .get("http://localhost:5001/admin/getUser", {
     headers: {
       Authorization: localStorage.getItem("currentToken"),
     },
   })
   .then((data) => {
     console.log("this is the data from UserContext", data);
    //  setMsg(data.msg);
     // setUser({
     //       _id:data.result._id,
     //       accountType: data.result.accoutType,
     //       firstName: data.result.firstName,
     //       lastName: data.result.lastName,
     //       title: data.result.title,
     //       email: data.result.email,
     //       mobile: data.result.mobile,
     //       location: data.result.location,
     //       github: data.result.github,
     //       linkedin: data.result.linkedin,
     //       facebook: data.result.facebook,
     //       instagram: data.result.instagram,
     //       otherSocials: data.result.otherSocials,
     //       otherWebsites: data.result.otherWebsites,
     //       profilePic: data.result.profilePic,
     //       password: data.result.password,
     //       signupDate: data.result.signupDate,
     //       aboutUser: data.result.aboutUser,
     //       workExperience: data.result.workExperience
     //               })
   });
    }
  
  return (

<UserContext.Provider value={{emptyUserState, getUser, user, setUser, isVerified, isAdmin}}>
{children}
</UserContext.Provider>
  )
}



