import { oferts } from "../data/oferts";

const OfertsMobile = () => {
  const ofertsElMobile = oferts.map((el, index) => (
    <div className="multi-container--infoBox" key={el.id} id={`io${el.id}`}>
      <details>
        <summary>
          <h2>
            {index === 0 && <i className="fa fa-solid fa-bath"></i>}
            {index === 1 && <i className="fa fa-solid fa-building"></i>}
            {el.title}
          </h2>
          <svg
            className="control-icon control-icon-expand"
            width="24"
            height="24"
            role="presentation"
          >
            <use
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref="#expand-more"
            />
          </svg>
          <svg
            className="control-icon control-icon-close"
            width="24"
            height="24"
            role="presentation"
          >
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" />
          </svg>
        </summary>
        <ul className="infoBox_list">
          {el.items.map((el, index) => (
            <li
              key={el}
              className={`infoBox_list--item animate__fadeInUp  animate__delay-${index}s animate__animated`}
              id={`li${index}`}
            >
              {el}
            </li>
          ))}
        </ul>
      </details>
    </div>
  ));

  return (
    <section className="content_multi-container">
      <div className="content_multi-conrainer--arrow">
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol viewBox="0 0 24 24" id="expand-more">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </symbol>
          <symbol viewBox="0 0 24 24" id="close">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </symbol>
        </svg>
      </div>
      {ofertsElMobile}
    </section>
  );
};

export default OfertsMobile;
