import "./Button.css";

const Button = ({ buttonContent, clickEffect }) => {

  return (
    <div className="ButtonExterior"> 
      <button className="Button" type={buttonContent} onClick={clickEffect}>
        <div className="ButtonInterior">{buttonContent.includes('img') ? null : buttonContent }</div>
      </button>
    </div>
  );
};

export default Button;
