import React from 'react';

import classes from './userOutput.css';




const userOutput= (props)=>{
   
  


   return(
    

   <div className={classes.abc}>
        
        <p>I hope I'll be overwritten</p>
        <p onClick={props.click}>Myself:{props.name}</p>
   </div>
   )
};

export default userOutput;