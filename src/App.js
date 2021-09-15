import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
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
  return (
    <div className="container">
      <Header />
      <Tasks tasks = {tasks}/>
    </div>
  );
};

export default App;

const headerStyle = {
  color: "red",
  backgroundColor: "black",
};
