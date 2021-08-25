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
                    <div className="hidden lg:inline ">
                        <p className="px-4 py-2 border rounded-full shadow-sm cursor-pointer items-center active:scale-95 hover:shad">
                            Cancellation flexibility
                        </p>
                    </div>
                </section>
                
            </main>
            <Footer />
        </div>
    )
}

export default Search
