// components/Footer.tsx
export function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>labs4apps</h3>
          </div>
  
          <ul className="footer-links">
            <li><a href="#about">O nas</a></li>
            <li><a href="#services">Usługi</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
  
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} labs4apps. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    );
  }
  