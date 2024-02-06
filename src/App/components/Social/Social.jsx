import "./Social.scss";

const Social = () => {
  return (
    <div className="social">
      <div className="fb myIcon">
        <a
          href="https://www.facebook.com/TIPTOPArturBarski/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/icons/facebook_icon.svg"
            width="40"
            height="40"
            alt="facebook"
          />
          <div className="facebook-open dymek">
            <span>Facebook</span>
          </div>
        </a>
      </div>
      <div className="phone myIcon">
        <a href="tel:508531655" rel="noreferrer">
          <img src="/icons/call.svg" width="50" height="50" alt="facebook" />
        </a>
      </div>
    </div>
  );
};

export default Social;
