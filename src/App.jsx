
import Home from "./sections/Home";
import AboutUs from './sections/AboutUs'
import ProductDetail from './sections/ProductDetail'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import CustomerReviews from './sections/CustomerReviews'
import Subscribe from "./sections/Subscribe";
import Footer from './sections/Footer'
import Nav from "./components/Nav";


const App = () => (
  <main className="relative">


    <Nav/>

    <section className="xl:padding-l wide:padding-r padding-b">
      <Home/>
    </section>

    <section className="xl:padding-l wide:padding-r padding">
      <AboutUs/>
    </section>


    <section className="padding">
      <ProductDetail/>
    </section>

    <section className="padding-x py-10">
      <Services/>
    </section>

    <section className="padding">
      <SpecialOffer/>
    </section>
  
    <section className="padding">
      <CustomerReviews/>
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    
    <section className="padding-x bg-brown padding-t">
      <Footer/>
    </section> 

  </main>
);

export default App;

