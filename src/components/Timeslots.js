// Component for timeslots

import React from 'react';
import Card from 'react-bootstrap/Card';

// Inserting data & time cards
function Timeslots() {
return (
    <div className="container">
        <h2>times available</h2>
        {/* hard coded, make dynamic later */}
        <Card>
            <Card.Body>9-10</Card.Body>
        </Card>
        <Card>
            <Card.Body>10-11</Card.Body>
        </Card>
        <Card>
            <Card.Body>11-12</Card.Body>
        </Card>
        <Card>
            <Card.Body>12-1</Card.Body>
        </Card>
        <Card>
            <Card.Body>1-2</Card.Body>
        </Card>
        <Card>
            <Card.Body>2-3</Card.Body>
        </Card>
        <Card>
            <Card.Body>3-4</Card.Body>
        </Card>
        <Card>
            <Card.Body>4-5</Card.Body>
        </Card>
    </div>
)
};

export default Timeslots;