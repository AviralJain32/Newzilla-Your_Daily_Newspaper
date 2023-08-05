import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/navbar1.js";
import React, { useState } from "react";
import News from "./components/news1.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// difference betweeen class based componet and function based component
//class based mai state ,props alag hote hai and method easy hota hai
const App = () => {
  const pageSize = 10;
  const [progress, setprogress] = useState(0);
  return (
    <div>
      <Router>
        <LoadingBar height={2} color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setprogress} key="home" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business1" element={<News setProgress={setprogress} key="business1" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment1" element={<News setProgress={setprogress} key="entertainment1" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/general1" element={<News setProgress={setprogress} key="general1" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/health1" element={<News setProgress={setprogress} key="health1" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science1" element={<News setProgress={setprogress} key="science1" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/sports1" element={<News setProgress={setprogress} key="sports1" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology1" element={<News setProgress={setprogress} key="technology1" pageSize={pageSize} country="in" category="technology" />} />t
        </Routes>
      </Router>
    </div>
  );
}
export default App;