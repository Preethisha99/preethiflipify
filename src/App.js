
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider"
import Virtual from "./components/Virtual/Virtual"
import Products from "./components/Products/Products"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      {/* PARENT COMPONENT */}
      <Header></Header>
      <Hero></Hero>
      <Slider></Slider>
      <Virtual></Virtual>
      <Products></Products>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
