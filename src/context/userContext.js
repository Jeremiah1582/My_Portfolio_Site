import React, {createContext, useState, useEffect} from 'react'
import axios from "axios"


export const UserContext = createContext()
 export default function UserProvider({children}) {
const [isVerified, setIsVerified] = useState(false)
const [isAdmin, setIsAdmin] = useState(false)
const [contextMsg, setContextMsg] = useState("")
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

if (isVerified=== true) {
  setTimeout(() => {
    window.localStorage.removeItem("currentToken");
    window.location.href= "/"
    setIsVerified(false);
    setContextMsg("you have been logged out")
  }, 10000 * 6);
}

console.log("isVerified is...",isVerified);

// userEffect----------------------------
const controller = new AbortController()
console.log("controller log",controller);

 const getUser=()=> {
   const currentToken = localStorage.getItem("currentToken");
   console.log("getuser func...", currentToken );
   try {
   if (currentToken === null) {
     console.log(" you are probably logged out/ no user set");
     
   } else {
     axios
       .get("http://localhost:5001/admin/getUser", {
         headers: {
           authorization: "Bearer " + currentToken,
         },
       })
       .then((data) => {
         if (data) {
           const { result, msg } = data.data;
           console.log("this is the data from UserContext", data);
           setMsg(msg);
           setUser(result);
           setIsAdmin(true);
         } else {
           console.log("token probably didnt match");
         }
       });
   }
 } catch (error) {
   throw error
   
 }
    }
  useEffect(() => {

    getUser()
  }, [])
  
  return (
    <UserContext.Provider
      value={{
        emptyUserState,
        user,
        setUser,
        isVerified,
        isAdmin,
        setIsVerified,
        getUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}



