import Heading from "./components/heading";
import Form from "./components/todo-form";
import TODO_ITEM from "./components/todo-item";
import "./App.css";
import { useReducer } from "react";
import { TodoItems } from "./store/todo-items-store";
import Welcome from "./components/welcome-message";
import taskItemReducer from "./store/taskItemReducer";

function App() {
  const [tasks, dispatchTaskItems] = useReducer(taskItemReducer, []);
  return (
    <>
      <TodoItems.Provider value={{ tasks, dispatchTaskItems }}>
        <div className="container text-center">
          <div className="row">
            <div className="col"></div>
            <div className="col-12">
              <div className="container-fluid">
                <div className="card">
                  <div className="card-body">
                    <center>
                      <Heading />
                      <br />
                      <Form />
                      <br />
                      <Welcome />
                      <TODO_ITEM />
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </TodoItems.Provider>
    </>
  );
}

export default App;
