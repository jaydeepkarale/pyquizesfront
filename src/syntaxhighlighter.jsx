import "./App.css";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import answers from "./constants";

function SyntaxHiglighter(props) {  
  const [quizContent, setQuizContent] = useState("");
  

  useEffect(() => {
    // Define the path to your file relative to the public directory
    const filePath = answers[props.question_id].Question

    // Fetch the file content
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => setQuizContent(data))
      .catch((error) => console.error("Error reading file:", error));

  }, []);
  const defaultLanguage = "python";
  const defaultTheme = "a11yDark";
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <>
      <div class="flex flex-col items-center space-y-6 m-20 px-10 dark:text-gray-200">
        <div class="font-serif text-3xl font-semibold">
          What Is The Output Of The Below Code ?
        </div>
        <div
          class="bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-40 
 my-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  dark:shadow-white/30 shadow-2xl"
        >
          <div class="font-mono py-4 px-4 text-2xl">
            <SyntaxHighlighter language={language} style={themes[theme]}>
              {quizContent}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  );
}

export default SyntaxHiglighter;
