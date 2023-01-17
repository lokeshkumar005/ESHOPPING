import "./App.scss";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Cart from "./Components/cart";
import Login from "./Components/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
