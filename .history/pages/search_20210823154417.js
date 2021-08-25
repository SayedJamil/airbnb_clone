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
                    <h1 className="text-3xl font-bold mt-2 mb-6">Stays in Mars</h1>
                </section>
                <div className="hidden lg:inline ">
                    <p className="px-4 py-2 border">
                        Cancellation flexibility
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Search
