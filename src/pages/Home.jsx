import { useNavigate } from "react-router-dom";
import Feature from "../components/feature";
import FeaturedProduct from "../components/featured-product";
import NewArrivals from "../components/new-arrivals";
import Newsletter from "../components/newsletter";
import RepairServiceBanner from "../components/repair-service-banner";
import SmallBanner from "../components/small-banners";
import "../styles/Home.css";
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button onClick={()=> navigate("/shop")}>Shop now</button>
      </section>

      <Feature />
      <FeaturedProduct />
      <RepairServiceBanner />
      <NewArrivals />
      <SmallBanner />
      <Newsletter />
      
    </div>
  );
}

export default Home;
