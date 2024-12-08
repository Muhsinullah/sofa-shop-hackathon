import Herro from "./components/herro";
import ProductShowcase from "./components/ProductShowcase";
import TopPicks from "./components/TopPicks";
import Blogs from "./components/Blogs";
import Instagram from "./components/Instagram";
// import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Herro />
      <ProductShowcase />
      <TopPicks />
      <Blogs />
      <Instagram />
     
    </div>
  );
}
