import ProductNavBar from "../components/ProductNavbar";
import ProductSection from "../components/ProductSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <div className="absolute top-0 z-10 w-full">
                <ProductNavBar />
            </div>
            <ProductSection />

        </main>
    )
}
