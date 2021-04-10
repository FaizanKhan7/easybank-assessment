import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhyUs from "./components/WhyUs/WhyUs";

function App() {
  return (
    <div className="easybankWrapper">
      <Header />
      <Hero />
      <WhyUs />
    </div>
  );
}

export default App;
