import Home from "./components/Home";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:name" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
