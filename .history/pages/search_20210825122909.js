import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import ItemCard from "../components/ItemCard";

function Search({ searchResults }) {
    // to access the query uploaded to history
    const router = useRouter();
    // how to check if the query is updated
    // console.log(router.query);

    // ES6 destructuring
    const { location, startDate, endDate, guestNumber } = router.query;
    console.log(startDate)
    const formattedStartDate = format(new Date(startDate), "dd/MMMM/yyyy");
    const formattedEndDate = format(new Date(endDate), "dd/MMMM/yyyy");
    const rangeDate = `${formattedStartDate} to ${formattedEndDate}`;
    console.log(rangeDate);
    return (
        <div>
            <Header placeholder={`${location} | ${rangeDate} | ${guestNumber}`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-sm">
                        300+ Stays from {rangeDate} for {guestNumber} Guests
                    </p>
                    <h1 className="text-3xl font-bold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-600 whitespace-nowrap">
                        <p className="button">Cancellation flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                    {searchResults.map(({ img, location, title, description, total, price, total }) => (
                        <ItemCard
                            img={img}
                            location={location}
                            title={title}
                            desciption={description}
                            location={location}
                            location={location}
                        />

                    ))}
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Search


export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());
    return {
        props: {
            searchResults,
        }
    };

}
