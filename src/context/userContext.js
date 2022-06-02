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

     
// userEffect----------------------------

 const getUser=(e)=> {
   e.preventDefault()
 axios
   .get("http://localhost:5001/admin/getUser", {
     headers: {
       authorization: "Bearer "+localStorage.getItem("currentToken"),
     },
   }).then((data) => {
     const {result, msg}=data.data
     console.log("this is the data from UserContext", data.data.result);
     setMsg(msg);
     setUser({
           _id:result._id,
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
           workExperience: result.workExperience
                   })
   });
    }
  
  return (

<UserContext.Provider value={{emptyUserState, getUser, user, setUser, isVerified, isAdmin}}>
{children}
</UserContext.Provider>
  )
}



