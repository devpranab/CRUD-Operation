import React,{ useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../userContext/userContext';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Delete = () => {
    //hooks
     const [users, setUsers] = useContext(UserContext);
     const {id} = useParams(); //hold dynamic part

    const deleteUser = id => {
    const user = users.filter(user => user.id != id); //delete if == with same id
    setUsers(user);
    }

    return (
        <div>
            <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Are You Sure?</Modal.Title>
  </Modal.Header>
  <Modal.Footer>
      <Link to="/">
    <Button variant="secondary">Cancel</Button>
    <Button className='deleteBtn' onClick={() => deleteUser(id)} variant="danger">Delete</Button>
    </Link>
  </Modal.Footer>
 </Modal.Dialog>
        </div>
    );
};

export default Delete;