import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Todo from "./features/todo/Todo";
import Calculator from "./features/calculator/Calculator";
import Notes from "./features/notes/Notes";
import PomodoroTimer from "./features/timer/PomodoroTimer";
import SettingsContextProvider from "./features/timer/context/settingsContext";
import QRCode from "./features/qrcode/QRCode";
import Weather from "./features/weather/Weather";
import CardWar from "./features/games/cardwar/CardWar";
import BlackJack from "./features/games/blackjack/BlackJack";
import GameOfThrones from "./features/got/GameOfThrones";

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
        <main
          className={`content-container ${
            isSidebarOpen ? "expanded" : "collapsed"
          }`}
        >
          <Routes>
            <Route exact path={"/"} element="Hello world!" />
            <Route exact path={"/todo"} element={<Todo />} />
            <Route exact path={"/calculator"} element={<Calculator />} />
            <Route exact path={"/notes"} element={<Notes />} />
            <Route exact path={"/weather"} element={<Weather />} />
            <Route exact path={"/qrcode"} element={<QRCode />} />
            <Route exact path={"/got"} element={<GameOfThrones />} />
            <Route exact path={"/timer"} element="select timer" />
            <Route
              path={"/timer/pomodoro"}
              element={
                <SettingsContextProvider>
                  <PomodoroTimer />
                </SettingsContextProvider>
              }
            />
            <Route exact path={"/cardgames"} element="coming soon.." />
            <Route exact path={"/cardgames/cardwar"} element={<CardWar />} />
            <Route exact path={"/cardgames/blackjack"} element={<BlackJack />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
