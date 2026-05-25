import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Countdown from "./components/Countdown";
import Details from "./components/Details";
import Coordinator from "./components/Coordinator";
import Speakers from "./components/Speakers";
import Registration from "./components/Registration";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Overview />
      <Countdown />
      <Details />
      <Coordinator />
      <Speakers />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
