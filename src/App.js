import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState } from 'react'

const App = () => {
  const [tasks, setTasks]=useState
(
[
    {
        id:1,
        text: "Doctors Appointment",
        day:"Feb 5th at 2:50 pm",
        reminder: true,
    },
    {
        id:2,
        text:"Meeting at school",
        day: "feb 6th at 1:30 PM",
        reminder : true,
    },

    {
        id:3,
        text:"Food Shopping",
        day: "feb 5th 5:20 pm ",
        reminder : true,
    },
    {
    id:4,
    text:"Debugging Code",
    day: "feb 6th 9:20 pm ",
    reminder : false,
    },
])

//Adding the task
const addTask=(task)=>
{
  const id = Math.floor(Math.random()*1000)+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}

//Deleting The task
const deleteTask=(id)=>
  {
   setTasks(tasks.filter((task) =>task.id !== id ))
  }

  //toggling the reminder
  const toggleReminder=(id)=>
  {
    setTasks(tasks.map((task)=>
    {return(
      task.id === id ?{...task, reminder : !task.reminder}: task)
    }))
  }

  return (
    <div className="container">
      
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length>0 ?<Tasks tasks = {tasks} onDelete={deleteTask} onToggle ={toggleReminder}/> : <h3>No task to show</h3>}
      
    </div>
  );
};

export default App;

const headerStyle = {
  color: "red",
  backgroundColor: "black",
};
