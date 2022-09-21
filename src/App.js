import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import PersonalPage from "./PersonalPage";
import ConfirmationPage from "./ConfirmationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="personalpage" element={<PersonalPage />} />
        <Route path="personalpage/confirmationpage" element={<ConfirmationPage/>}/>
      </Routes>
    </div>
  );
}
export default App;