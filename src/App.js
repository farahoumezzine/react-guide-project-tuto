import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import Front from "./Components/Front";
import About from "./Components/About";
import Home from "./Components/Home";
import Errorpage from "./Components/Errorpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Front />
                <Home />
              </>
            }
          />
          <Route path="/about" element={<>
                <Front />
                <About />
              </> } />
          <Route path="/counter" element={<>
                <Front />
                <Counter />
              </>} />

          <Route path="*" element={<>
               <Errorpage />
              </>} />
              
        </Routes>
      </Router>

      {/*  <Front />
     <Counter />
*/}
    </div>
  );
}

export default App;
