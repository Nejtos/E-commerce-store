import "./Banner.css";
import Button from "./Button";

function Banner() {
  return (
    <>
        <div className="banner-box">
            <div className="banner-box-left"></div>
            <div className="banner-box-right">
                <div className="banner-box-right-text">Comfortable & Refined Living</div>
                <div className="banner-box-right-text">Cos tam cos tam dabek to ...</div>
                <div className="banner-box-right-text"><Button buttonContent="SHOP NOW"/></div>
            </div>
        </div>
    </>
  );
}
export default Banner;