import Header from "@/components/Header";
import HomeLinks from "@/components/HomeLinks";
import Banners from "@/components/Banners";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <HomeLinks />
      <Banners />
      <Main />
      <Footer />      
    </div>
  );
};

export default Home;
