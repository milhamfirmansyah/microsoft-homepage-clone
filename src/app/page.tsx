import Carbon from "./components/Carbon";
import Follow from "./components/Follow";
import Footer from "./components/Footer";
import HomeCards2 from "./components/HomeCards2";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Xbox from "./components/Xbox";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Showcase />
      <Xbox />
      <HomeCards2 />
      <Carbon />
      <Follow />
      <Links />
      <Footer />
    </div>
  );
}
