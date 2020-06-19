import React,{createContext,useState} from 'react';

export const UserProfileContext = createContext({
    firstname:"",
    lastname:"",
    email:"",
    address:"",
    zipCode:"",
    city:"",
    setUserProfileContext : info => {}
})

export const UserProfileContextProvider = ({children}) =>{
    const UserProfileState = {
        firstname:"",
        lastname:"",
        email:"",
        address:"",
        zipCode:"",
        city:"",
        setUserProfileContext : info =>
        setUserProfile(prevState => ({
          ...prevState,
          [Object.keys(info)] : Object.values(info)[0]
         /* firstname: info.firstname,
          lastname: info.lastname,
          email: info.email,
          address: info.address,
          zipCode : info.zipCode,
          city:info.city*/
        })) 
    }

    const [UserProfile, setUserProfile] = useState(UserProfileState)
    return(<UserProfileContext.Provider value={UserProfile}>{children}</UserProfileContext.Provider>)
}

//export default UserProfileContextProvider;
