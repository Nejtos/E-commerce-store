import "./Banner.css";
import Button from "./Button";

function Banner() {
  return (
    <>
      <div className="home-page-banner">
        <div className="container">
          <div className="banner-box">
            <div className="banner-box-left"></div>
            <div className="banner-box-right">
              <div className="banner-box-right-text">
                Comfortable & Refined Living
              </div>
              <div className="banner-box-right-text">
              Our products are made to give the expected decor to your space. With a wide range of sizes and decorations, you don't have to limit yourself and are sure to find something perfect for you.
              </div>
              <div className="banner-box-right-text">
                <Button buttonContent="SHOP NOW" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
