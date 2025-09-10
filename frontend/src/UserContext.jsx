// //import { useEffect } from "react";
// import { createContext, useState, useEffect } from "react";
// export const UserContext = createContext({});
// import axios from 'axios'; 
// export function UserContextProvider({children}) {
//     const [user,setUser] = useState(null);
//     const [ready, setReady] = useState(false);
//     useEffect(() => {
//         if (!user) {
//            axios.get('/profile').then(({data}) => {
//            setUser(data);
//            setReady(true);
//         });
//     } 
//     },[]);
//     return (
//         <UserContext.Provider value={{user,setUser,ready}}>
//         {children}
//         </UserContext.Provider>
//     );
// }



import { createContext, useState, useEffect } from "react";
import axios from 'axios'; 

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios.get('/profile')
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => {
        setUser(null); // not logged in
      })
      .finally(() => {
        setReady(true); // ✅ always set ready
      });
  }, []); // only run once

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
