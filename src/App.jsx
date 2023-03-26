import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/project/:id" element= {<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
