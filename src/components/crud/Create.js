import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../userContext/userContext';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Create = () => {
    const [users, setUsers] = useContext(UserContext);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");

    // functions start
    const updateId = (e) => {
        setId(e.target.value);
        console.log(id);
    }
    const updateName = (e) => {
        setName(e.target.value);
    }
    const updatePosition = (e) => {
        setPosition(e.target.value);
    }
    const updateSalary = (e) => {
        setSalary(e.target.value);
    }
    const addUser = (e) => {
        e.preventDefault();
        setUsers([...users, {id:id, name:name, position:position, salary:salary}])

    }
    // functions end

    return (
        <div className='create'>
            <Form onSubmit={addUser}>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" name="id" onChange={updateId} placeholder="Input Id"/>
             
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={updateName} placeholder="Input Name"/>
                
                    <Form.Label>Position</Form.Label>
                    <Form.Control type="text" name="position" onChange={updatePosition} placeholder="Input Position"/>
             
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="text" name="salary" onChange={updateSalary} older="Input Salary"/>
                </Form.Group>
             
        <Button className="btnThree" variant="primary" type='submit'>Create User</Button>
        <Link to="/">
       <Button className="btnThree" variant="secondary">Back to home</Button>
       </Link>
            </Form>
            
        </div>
    );
};

export default Create;