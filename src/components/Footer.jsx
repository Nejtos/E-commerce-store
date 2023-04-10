import "./Footer.css";

function Footer() {
  return (
    <>
        <footer>
            <div className="footer-links">
                <div className="footer-links-text" onClick={ () => window.scrollTo(0, 0)}>About Us</div>
                <div className="footer-links-text" onClick={ () => window.scrollTo(0, 0)}>FAQS</div>
                <div className="footer-links-text" onClick={ () => window.scrollTo(0, 0)}>News</div>
                <div className="footer-links-text" onClick={ () => window.scrollTo(0, 0)}>Careers</div>
                <div className="footer-links-text" onClick={ () => window.scrollTo(0, 0)}>Contact Us</div>
            </div>
        </footer>
    </>
  );
}
export default Footer;