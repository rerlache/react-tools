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
import Home from "./components/Home";
import Game2048 from "./features/games/2048/2048";

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
            <Route exact path={"/"} element={<Home />} />
            <Route path={"/todo"} element={<Todo />} />
            <Route path={"/calculator"} element={<Calculator />} />
            <Route path={"/notes"} element={<Notes />} />
            <Route path={"/weather"} element={<Weather />} />
            <Route path={"/qrcode"} element={<QRCode />} />
            <Route path={"/got"} element={<GameOfThrones />} />
            <Route path={"/games/2048"} element={<Game2048 />} />
            <Route path={"/timer"} element="select timer" />
            <Route
              path={"/timer/pomodoro"}
              element={
                <SettingsContextProvider>
                  <PomodoroTimer />
                </SettingsContextProvider>
              }
            />
            <Route path={"/cardgames"} element="coming soon.." />
            <Route path={"/cardgames/cardwar"} element={<CardWar />} />
            <Route path={"/cardgames/blackjack"} element={<BlackJack />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
