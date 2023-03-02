import { useContext } from "react";
import { AppContext } from "../../Provider/Provider";

const Social = () => {
  const { tip } = useContext(AppContext);
  return (
    <>
      <div className="social">
        <div className="fb myIcon">
          <a
            href="https://www.facebook.com/TIPTOPArturBarski/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook-official" />
            <div className="facebook-open dymek">
              <span>Facebook</span>
            </div>
          </a>
        </div>
        <div className="mg ">
          <img
            src={`${tip}/icons/messenger.svg`}
            alt="ofert"
            className="mg_icon"
          />
          <div className="messenger-open dymek">
            <span>Messenger</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
