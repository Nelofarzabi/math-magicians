import './styles/home.css';

export default function Home() {
  return (
    <>
      <section className="home">
        <h1 className="h1">Welcome to our page</h1>
        <div className="text">
          <p>Math Magicians is a website for all fans of mathematics.</p>
          <p>It is a Single Page App (SPA) that allows users to: </p>
          <br />
          <p>- Make simple calculations. </p>
          <p>- Read a random math-related quote.</p>
        </div>
      </section>
    </>
  );
}
