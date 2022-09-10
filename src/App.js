import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages";
import Error from "./pages/error";
import "animate.css/animate.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
