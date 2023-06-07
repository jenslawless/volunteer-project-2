import Link from "next/link";


const Home = () => {
  return (
    <section>
      <h1>Project Volunteer
        <br />
        <span >Helping volunteers volunteer</span>
      </h1>
      <p>
        Project Volunteer connects local do-gooders with organizations searching for volunteers.
      </p>
      <Link href="/opps">View the Opportunities here!</Link>
    </section>
  )
}
export default Home