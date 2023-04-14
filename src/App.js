import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from './components/Home'
import About from './components/About'
import Store from './components/Store'
import Contact from "./components/Contact";
import Login from "./components/Login";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/store" Component={Store}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/login" Component={Login}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
