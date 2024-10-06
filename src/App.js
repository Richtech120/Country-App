import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <div className="about">
        <Router>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/main" element={<Main/>}/>
          </Routes>
        </Router>
      </div> 

    </>
  );
}

export default App;
