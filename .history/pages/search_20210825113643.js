import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
    to access the query uploaded to history
    const router = useRouter();

    return (
        <div>
            <Header />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-sm">
                        300+ Stays for 5 number of Guests
                    </p>
                    <h1 className="text-3xl font-bold mt-2 mb-6">Stays in Mars</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-600 whitespace-nowrap">
                        <p className="button">Cancellation flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Search
