import React from "react";
import ReactDOM from "react-dom/client";
import SyntaxHiglighter from "./syntaxhighlighter.jsx";
import "./index.css";
import Navbar from "./navbar.jsx";
import Options from "./options.jsx";
import { useState } from "react";


// Function to generate a random number
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const questionId = generateRandomNumber(); // Generating a random number


ReactDOM.createRoot(document.getElementById("root")).render(    
  <React.StrictMode>    
    <Navbar />
    <SyntaxHiglighter question_id={questionId} />
    <Options question_id={questionId} />
  </React.StrictMode>
);
