import VolCards from "@/lib/getAllPosts";
import Link from "next/link"

async function VolCardsPage() {
    const data = await VolCards();

    const opportunities = await data


    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {opportunities.map((opp) => {
                return (
                    <>
                        <p key={opp.id}>
                            {opp.name}
                        </p>
                    </>
                )
            })}

        </section>
    )

    return content
}

export default VolCardsPage;