import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import Detail from "./Detail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
