import './header.css'
export const Header = () => {
  return (
    <header>
      <div className="container header__content">
        <div className="site-logo"></div>
        <div className="navigation">
          <button className="nav-btn" aria-label="menu"></button>
          <nav className="rollout-nav nav-closed inline-nav">
            <a href="#home">Domů</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Galerie</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
