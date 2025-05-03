import './header.css'
export const Header = () => {
  return (
    <header id ="header">
      <div className="container header_content">
        <div className="site-logo"></div>
        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
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
