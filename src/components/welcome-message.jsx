import React, { useContext } from "react";
import { TodoItems } from "../store/todo-items-store";
const Welcome = () => {
  const { tasks } = useContext(TodoItems);
  console.log(tasks);
  return <>{tasks.length === 0 ? <h1>Enjoy your day!</h1> : ""}</>;
};

export default Welcome;
