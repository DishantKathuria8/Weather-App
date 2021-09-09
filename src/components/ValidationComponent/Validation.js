import React from 'react';

const text = (props) => {
    return( 
            <div>
                {
               props.length >5 ? <p>Text long enough!</p> : <p>Length too short!</p>
                }   
            </div> 
    )


}
export default text;