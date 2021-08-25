import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
    return (
        <div>
            <Header />
            <main className="flex">
                <section>
                    <p className="text-sm">
                        300+ Stays for 5 number of Guests
                    </p>
                    <h1 className="text-3xl font">Stays in Mars</h1>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search
