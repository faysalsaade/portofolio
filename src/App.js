import "./component/Navbar.css";
import Hero from "./hero";
import Navbar from "./component/Navbar";
import Achievements from "./component/Achievements";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Achievements />
    </div>
  );
}

export default App;
