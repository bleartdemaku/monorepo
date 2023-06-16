import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Page from "./pages/page/Page";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/page/:id" element={<Page />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
