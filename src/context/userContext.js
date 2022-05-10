import React, {createContext, useState, useEffect} from 'react'
import axios from "axios"

export const UserContext = createContext()
 export default function UserProvider({children}) {

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

// setting Hooks-------------------------
const [user, setUser] = useState(emptyUserState)
const [msg,setMsg] = useState({})

// userEffect----------------------------
 useEffect(() => {

      axios
        .get("http://localhost:5001/user/readUser")
        .then(doc=>{
          const{data}=doc
          console.log(data, "this is the data from UserContext");
          setMsg(data.msg)
          setUser({
                _id:data.result._id,
                accountType: data.result.accoutType,
                firstName: data.result.firstName,
                lastName: data.result.lastName,
                title: data.result.title,
                email: data.result.email,
                mobile: data.result.mobile,
                location: data.result.location,
                github: data.result.github,
                linkedin: data.result.linkedin,
                facebook: data.result.facebook,
                instagram: data.result.instagram,
                otherSocials: data.result.otherSocials,
                otherWebsites: data.result.otherWebsites,
                profilePic: data.result.profilePic,
                password: data.result.password,
                signupDate: data.result.signupDate,
                aboutUser: data.result.aboutUser, 
                workExperience:[
                    {
                    startDate: data.result.startDate,
                    endDate:data.result.endDate,
                    companyName:data.result.companyName,
                    position: data.result.position,
                    responsibilities: data.result.responsibilities
                    }
                ] 
                        })
        })
    }, [])
  
  return (

<UserContext.Provider value={{emptyUserState, user, setUser}}>
{children}
</UserContext.Provider>
  )
}



