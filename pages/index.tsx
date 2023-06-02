import NavBar from "../components/NavBar";
import NavigationBar from "../components/NavigationBar";
import NewArrivals from "../components/NewArrivals";
import ProductSlider from "../components/ProductSlider";
import Searchbar from "../components/Searchbar";
import TitleComponent from "../components/TitleComponent";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <TitleComponent />
      <Searchbar />
      <ProductSlider />
      <NewArrivals />
      <NavigationBar />
    </main>
  )
}
