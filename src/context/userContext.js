import React, {createContext, useState, useEffect} from 'react'
import axios from "axios"

export const UserContext = createContext()
 export default function UserProvider({children}) {

// States----------------------------
const userState = {
  _id:'',
  accountType: "",
  firstName: "",
  lastName: "",
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
      startDate:{},
      endDate:{},
      companyName:'',
      position:'',
      responsibilities:''
    },
  ]
}
// setting Hooks-------------------------
const [user, setUser] = useState(userState)

// userEffect----------------------------
 useEffect(() => {

      axios
        .get("http://localhost:5001/user/readUser")
        .then(data=>{
          console.log(data, "this is the data from UserContext");
            setUser({
                _id:data._id,
                accountType: data.accoutType,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                mobile: data.mobile,
                location: data.location,
                github: data.github,
                linkedin: data.linkedin,
                facebook: data.facebook,
                instagram: data.instagram,
                otherSocials: data.otherSocials,
                otherWebsites: data.otherWebsites,
                profilePic: data.profilePic,
                password: data.password,
                signupDate: data.signupDate,
                aboutUser: "this is the about section fo this user", 
                workExperience:[
                    {
                    startDate: data.startDate,
                    endDate:data.endDate,
                    companyName:data.companyName,
                    position: data.position,
                    responsibilities: data.responsibilities
                    },
                ] 
                        })
        })
    }, [])

  return (

<UserContext.Provider value="">
{children}
</UserContext.Provider>
  )
}



