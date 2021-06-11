// Component for modal pop up form

import React from 'react';
import { Form, Button } from 'react-bootstrap'

function ModalForm() {
    return(
        <div className="container">
            <Form>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="type your name here"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="(xxx)-xxx-xxxx"/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
};

export default ModalForm;