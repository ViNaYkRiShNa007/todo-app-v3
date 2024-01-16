import React, { createContext } from "react";

export const TodoItems = createContext({
  tasks: [],
  dispatchTaskItems: () => {},
});
