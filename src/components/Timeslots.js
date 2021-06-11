// Component for timeslots

import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

// Inserting hours into cards & modal on click
function Timeslots() {

 // modal show hide states

 const [showModal, setShowModal] = useState(false);
 const handleCloseModal = () => {
     setShowModal(false);
    selectedAppointment();
    }
 const handleShowModal = () => setShowModal(true);

// state for name & phone number
//  no cross user data is maintained, assumption is one user
const [userName, setUserName] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");

function selectedAppointment() {
    document.getElementById("selected").style.background="red";
}

const handleSubmit=e=> {
    e.preventDefault();
}


//set hours for time slots
  const hours = [9, 10, 11, 12, 1, 2, 3, 4];
  const hourCards = [];
  // loops creates values of time slot buttons
  for (const value of hours) {
    hourCards.push(
      <div>
        <Button id="selected" variant="outline-success" style={{color:"black"}} size="lg" block onClick={handleShowModal}>
          {value}-{value + 1}
        </Button>
        
      </div>
    );
  }

  return (
    <div className="container-fluid">
        {/* return hour data */}
      {hourCards}
      {/* modal form starts here */}
      <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Please input your information here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" value={userName} placeholder="type your name here" onChange={e => setUserName(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" value={phoneNumber} placeholder="(xxx)-xxx-xxxx" onChange={e => setPhoneNumber(e.target.value)} />
              </Form.Group>
              <Button variant="primary" onClick={handleCloseModal} type="submit">
              Save Changes
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
    </div>
  );
}

export default Timeslots;
