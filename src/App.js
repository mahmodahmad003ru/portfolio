import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About />
      <Skills />
      <Work />
    </>
  );
}

export default App;
