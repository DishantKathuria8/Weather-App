import React, { Component } from 'react';
import classes from './App.css';
import Vaccine from './Person/vaccine';

class App extends Component {
    state={
      users:['Dishu','Manak','Pushkar','Pulkit'],
      setUsers:false
    }

    togglePersonsHandler=()=>{
      const toggle=this.state.setUsers;
       this.setState({setUsers:!toggle});
    }
    deleteSlotHandler=(index)=>{
      const users=this.state.users;
      users.splice(index,1);
      
      this.setState({users:users});
    }

    nameChangeHandler=(event,index)=>{

      const user=this.state.users;
      user[index]=event.target.value;

      this.setState({users:user});

    }
   
    
    

  render(){
  
    let user=null;
    let btnClass=[classes.Button];
    let addClass=[];
    if(this.state.setUsers)
    {
      user=(
        <div>
          {
            this.state.users.map( (u,index) => {
         return <Vaccine name={u} click={()=>this.deleteSlotHandler(index)}  change={(event)=>this.nameChangeHandler(event,index)}  />
            })
          
        }
        </div>
        )
        btnClass.push(classes.Blue);

        if(this.state.users.length<=3)
              addClass.push(classes.red);
        if(this.state.users.length<=2)
              addClass.push(classes.bold);      


    }
    return (
      <div className={classes.App}>
        <h1 >Welcome to CoWin</h1>
        <p className={addClass.join(' ')}>Click here to book your vaccine slot</p>
        <button onClick={this.togglePersonsHandler} className={btnClass.join(' ')} >
          Register Yourself
        </button>
        {user}
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
