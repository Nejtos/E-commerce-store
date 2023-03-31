import "./Newsletter.css"

function Newsletter() {
  return (
    <>
      <div className="newsletter-box">
        <div className="newsletter-title">Newsletter</div>
        <div className="newsletter-details">
          <input type="text" id="userEmail" className="input-email" placeholder="your@email.com"></input>
          <button type="submit" className="button">Subscribe</button>
        </div>
      </div>
    </>
  );
}
export default Newsletter;
