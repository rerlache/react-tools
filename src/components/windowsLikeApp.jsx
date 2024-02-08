// App.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// LoginPage.js
import React from "react";

function LoginPage() {
  // Function to open the main page in a new window without the address bar
  const openMainPage = () => {
    const winFeature =
      "location=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes";
    window.open("/main", "null", winFeature);
  };

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <button onClick={openMainPage}>Go to Main Page</button>
    </div>
  );
}

export default LoginPage;

// MainPage.js
import React from "react";

function MainPage() {
  return (
    <div className="main-page">
      <div className="title-bar">
        <span className="title">My React App</span>
        <span className="buttons">
          <button className="minimize">-</button>
          <button className="maximize">+</button>
          <button className="close">x</button>
        </span>
      </div>
      <div className="content">
        <h1>Main Page</h1>
        <p>This is the main page of the app.</p>
      </div>
    </div>
  );
}

export default MainPage;

// index.css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.main-page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  background-color: #0078d7;
  color: white;
  font-family: "Segoe UI", sans-serif;
  font-size: 12px;
}

.title {
  margin-left: 10px;
}

.buttons {
  display: flex;
  margin-right: 10px;
}

button {
  height: 20px;
  width: 20px;
  border: none;
  outline: none;
  cursor: pointer;
}

.minimize {
  background-color: #f0f0f0;
  color: black;
}

.maximize {
  background-color: #f0f0f0;
  color: black;
}

.close {
  background-color: #e81123;
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 30px);
  width: 100%;
  background-color: #f0f0f0;
  font-family: "Segoe UI", sans-serif;
  font-size: 16px;
}
