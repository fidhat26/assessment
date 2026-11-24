import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
{ label: "Home", href: "#home" },
{ label: "How it works", href: "#how-it-works" },
{ label: "Features", href: "#features" },
{ label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
const handleResize = () => {
if (window.innerWidth >= 1024) {
setMenuOpen(false);
}
};

window.addEventListener("resize", handleResize);

return () => {
window.removeEventListener("resize", handleResize);
};
}, []);

const closeMenu = () => setMenuOpen(false);

return (
<header className="site-header">
<nav className="navbar" aria-label="Main navigation">
<a className="logo" href="#home" onClick={closeMenu}>
<span className="logo-mark">N</span>
<span>Navbar</span>
</a>

<button
className="menu-toggle"
aria-label={menuOpen ? "Close menu" : "Open menu"}
aria-expanded={menuOpen}
onClick={() => setMenuOpen(!menuOpen)}
>
{menuOpen ? <X size={25} /> : <Menu size={25} />}
</button>

<div className={`nav-panel ${menuOpen ? "is-open" : ""}`}>
<button
className="close-menu"
aria-label="Close navigation"
onClick={closeMenu}
>
<X size={23} />
</button>

<a className="mobile-logo" href="#home" onClick={closeMenu}>
<span className="logo-mark">N</span>
<span>Navbar</span>
</a>

<ul className="nav-links">
{links.map((link) => (
<li key={link.label}>
<a href={link.href} onClick={closeMenu}>
{link.label}
</a>
</li>
))}
</ul>

<a
className="create-button"
href="#create-account"
onClick={closeMenu}
>
Create Account
</a>
</div>
</nav>
</header>
);
}
