import { CtaOptionsList } from "../cmps/HomeCmps/CtaOptionsList"

function Home() {
  return (
    <section className="app-main page-home main-layout">
      <section className="home-title">
        <h1>Welcome to the Store Website</h1>
      </section>
      <section className="home-hero full">
        <h2>This is the Hero</h2>
      </section>
      <section className="home-cta">
        <h2>Register for the Service!</h2>
        <CtaOptionsList />
      </section>
    </section>
  )
}

export default Home
