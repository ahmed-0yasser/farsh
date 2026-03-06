import React, { createContext, useState } from 'react';
//  export  UserContext=createContext()


 export const UserContext = createContext();

export default function UserContextProvider(props){
     
    let [userToken,setuserToken]=useState(null)

 return  <UserContext.Provider value={{userToken,setuserToken}}>
        {props.children}

    </UserContext.Provider>

}