// Component for timeslots

import React from 'react';
import Card from 'react-bootstrap/Card';



// Inserting data & time cards
function Timeslots() {

    const hours=[9,10,11,12,1,2,3,4]
    const hourValue=[];
    for(const value of hours) {
        hourValue.push(<Card><Card.Body>{value}-{value+1}</Card.Body></Card>)
    }

return (
    <div className="container">
        <h2>times available</h2>
            {hourValue}
    </div>
)
};

export default Timeslots;