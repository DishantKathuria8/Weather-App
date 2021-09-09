import React,{useEffect,useRef,useContext} from 'react';
import classes from './cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit=(props)=>{
  const toggleBtnRef=useRef(null);
  const authContext= useContext(AuthContext);

  console.log(authContext.authenticated);
  useEffect(()=>{
       console.log("[Cockpit.js] useEffect");
      //  setTimeout(()=>{
      //    alert('Saved data to cloud!');
      //  },1000)
      toggleBtnRef.current.click();

       return ()=>{
         console.log("[cockpit.js] cleanUp work in useEffect");
       }
  },[]);

  useEffect(()=>{
    console.log("[Cockpit.js]  2nd useEffect");
    return ()=>{
      console.log("[cockpit.js] cleanUp work in  2nd useEffect");
    }
  })

    const assignedClasses = [];
    let btnClass=[classes.Button];

    if(props.get){
        btnClass.push(classes.Red);
    }
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return(
        <div>
           <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass.join(' ')} onClick={props.clicked}>
                Toggle Persons
             </button>
             
                <button onClick={authContext.login} className={btnClass.join(' ')}>Log In</button>
         
        </div>
    );
}

export default React.memo(cockpit);