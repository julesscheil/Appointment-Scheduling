// Component for timeslots

import React from 'react';
import Button from 'react-bootstrap/Button';

// Inserting data & time cards
function Timeslots() {

    const hours=[9,10,11,12,1,2,3,4]
    const hourValue=[];
    // loops creates values of time slot buttons
    for(const value of hours) {
        hourValue.push(<Button size="lg" block>{value}-{value+1}</ Button>)
    }

return (
    <div className="container">
        <h2>times available</h2>
            {hourValue}
    </div>
)
};

export default Timeslots;