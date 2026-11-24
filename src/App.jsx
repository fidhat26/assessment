import Navbar from "./components/Navbar";

function App() {
return (
<div className="app">
<Navbar />

<main className="hero">
<p className="eyebrow">WELCOME</p>

<h1>A simple, responsive navbar.</h1>

<p className="hero-description">
Resize your browser to see the navigation
adapt to desktop, tablet, and mobile screens.
</p>

<a className="hero-button" href="#learn-more">
Learn more
</a>
</main>
</div>
);
}

export default App;
