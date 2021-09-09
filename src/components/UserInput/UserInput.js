import React from 'react';

const userInput = (props)=>{
    const style1={
          border: '2px solid black',
          textAlign:'center',
          padding:'10px'
    }
     return <input type="text " style={style1} onChange={props.changed} value={props.currentName} />
};
export default userInput;