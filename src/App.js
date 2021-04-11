import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhyUs from "./components/WhyUs/WhyUs";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="easybankWrapper">
      <Header />
      <Hero />
      <WhyUs />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
