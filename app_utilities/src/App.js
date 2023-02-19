import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#1a1b22";
      showAlert("Dark mode turned on!", "Success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode turned on!", "Success");
    }
  };

  // const togglemode2 = () => {
  //   if (mode === "light") {
  //     setmode("dark");
  //     document.body.style.backgroundColor = "#022d06";
  //     showAlert("Dark mode turned on!", "Success");
  //   } else {
  //     setmode("light");
  //     document.body.style.backgroundColor = "#fff";
  //     showAlert("Light mode turned on!", "Success");
  //   }
  // };

  return (
    <>
      <Router>
        <Navbar
          title="TEXTUTIL"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          // togglemode2={togglemode2}
        />
        <Alert alert={alert} />
        {/* <Navbar /> in this case default values of title and about will be used as we have set in the Navbar.js */}
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse below: "
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
