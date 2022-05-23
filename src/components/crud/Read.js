import React from "react";
import { useContext } from "react";
import { UserContext } from "../../userContext/userContext";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Read = () => {
        //hooks
        const [users, setUsers] = useContext(UserContext);
        const {id} = useParams(); //hold dynamic part
   
    
       const user = users.filter(user => user.id == id);
    
    return(
        <div className="read">
            <h2>ID: {user[0].id}</h2>
            <h2>Name: {user[0].name}</h2>
            <h2>Position: {user[0].position}</h2>
            <h2>Salary: {user[0].salary} /-</h2>
            <Link to="/">
    <Button className="backBtn" variant="secondary">Back to home</Button>
    </Link>

        </div>
    )
}

export default Read;