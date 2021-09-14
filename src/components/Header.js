import React from "react";
import Button from "./Button";

const Header = (props) => {
  const onClickk = () => {
    console.log("Button Has been clicked");
  };
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" name="Add" onClickk={onClickk} />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
