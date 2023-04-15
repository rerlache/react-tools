import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Todo from "./features/todo/Todo";

function checkWindow() {
  const temp = window
  console.log(temp)
}

function App() {
  const [isSidebarOpen,  setIsSidebarOpen] = useState(false)
    const sidebarExpanded = window.innerHeight < window.innerWidth
  return (
    <>
      <Router>
        <Sidebar expanded={sidebarExpanded} isOpen={(menuOpen) => {setIsSidebarOpen(menuOpen)}} />
        <div className={`content-container ${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
          <Routes>
            <Route exact path={"/"} element='"Hello world!' />
            <Route exact path={"/todo"} element={<Todo />} />
            <Route exact path={"/calculator"} element='Do calculation!' />
            <Route exact path={"/notes"} element='take some notes' />
            <Route exact path={"/timer"} element='use some timer functionality' />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
