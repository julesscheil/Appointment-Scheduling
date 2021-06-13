// Component for timeslots

import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";

// Inserting hours into cards & modal on click
function Timeslots() {
  // modal show hide states
  const [showModal, setShowModal] = useState(false);
  //  const [bgColor, setBGColor] = useState("outline-success");
  const handleCloseModal = () => {
    setShowModal(false);
    //  setBGColor(!);
  };
  const handleShowModal = (e) => {
    setShowModal(true);
    selectedAppointment(e.target.id);
    // console.log(e.target.id);
  };

  // state for name & phone number
  //  no cross user data is maintained, assumption is one user
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState(null);

  function selectedAppointment(selectedID) {
    document.getElementById(selectedID).style.background = "red";
    console.log(selectedID)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const firstRender = useRef(true);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setDisabled(formValidate());
  }, [phoneNumber]);

  const formValidate = () => {
    var numbers = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneNumber || !numbers.test(phoneNumber)) {
      setPhoneError("Please provide a valid phone number");
      return true;
    } else setPhoneError(null);
    return false;
  };

  // set hours for time slots
  const hours = [9, 10, 11, 12, 1, 2, 3, 4];
  const hourCards = [];
  // loops creates values of time slot buttons
  for (const value of hours) { 
    hourCards.push(
      <div>
        <Button
          id={`selected${value}`}
          variant="outline-success"
          style={{ color: "black" }}
          size="lg"
          block
          onClick={handleShowModal}
        >
          {value}-{value + 1}
        </Button>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      {/* return hour data */}
      <div>{hourCards}</div>
      {/* modal form starts here */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Please input your information here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                placeholder="type your name here"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={phoneNumber}
                placeholder="(xxx)-xxx-xxxx"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {phoneError && <p>{phoneError}</p>}
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleCloseModal}
              type="submit"
              disabled={disabled}
            >
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default Timeslots;
