import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Todo from "./features/todo/Todo";
import Calculator from "./features/calculator/Calculator";
import Notes from "./features/notes/Notes";
import PomodoroTimer from "./features/timer/PomodoroTimer";
import SettingsContextProvider from "./features/timer/context/settingsContext";
import QRCode from "./features/qrcode/QRCode";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarExpanded = window.innerHeight < window.innerWidth;
  return (
    <Router>
      <div className="page-container">
        <Sidebar
          expanded={sidebarExpanded}
          isOpen={(menuOpen) => {
            setIsSidebarOpen(menuOpen);
          }}
        />
        <div
          className={`content-container ${
            isSidebarOpen ? "expanded" : "collapsed"
          }`}
        >
          <Routes>
            <Route exact path={"/"} element="Hello world!" />
            <Route exact path={"/todo"} element={<Todo />} />
            <Route exact path={"/calculator"} element={<Calculator />} />
            <Route exact path={"/notes"} element={<Notes />} />
            <Route
              exact
              path={"/qrcode"}
              element={<QRCode />}
            />
            <Route
              exact
              path={"/timer"}
              element={
                <SettingsContextProvider>
                  <PomodoroTimer />
                </SettingsContextProvider>
              }
            />
            <Route exact path={"/cardgames"} element="coming soon.." />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
