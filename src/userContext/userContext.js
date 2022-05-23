import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([
        {id: 1, name: "Pranav", position: "Frontend", salary: 20000},
        {id: 2, name: "Lutful", position: "Backend", salary: 25000},
        {id: 3, name: "Shakib", position: "Full Stack Dev", salary: 40000}
    ]);
    return(
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}