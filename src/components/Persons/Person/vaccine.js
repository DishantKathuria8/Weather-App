import React from 'react';
import classes from './vaccine.css';


const users= props =>{
   
    return(
        <div className={classes.Div}>
            <input type="text" className={classes.inp}  onChange={props.change} value={props.name}  /><br />
            <p> Hey {props.name}!Your Slot has been booked</p>
            <p onClick={props.click}>Click here to cancel your slot</p>
            
        </div>

    )
    
};

export default users;