import Footer from "../footer";
import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}

export default Layout;
