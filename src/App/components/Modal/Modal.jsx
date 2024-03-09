import "./Modal.scss";
import BackGroundForModals from "../BackGroundForModals/BackGroundForModals";
import { useContext } from "react";

import "photoswipe/style.css";
import { AppContext } from "../../provider/AppProvider";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Modal = () => {
  const { allPicGalleryPop, handleClickCloseGalleryModal, HOST } =
    useContext(AppContext);

  const GalleryMobilePics = allPicGalleryPop[0].all.map((image, index) => (
    <SwiperSlide key={image + index}>
      <img
        loading="lazy"
        src={`${HOST}/images/${image}`}
        alt={image}
        height="155"
        width="150"
      />
    </SwiperSlide>
  ));

  return (
    <BackGroundForModals style={{ flexDirection: "column" }}>
      <span className="close" onClick={handleClickCloseGalleryModal}>
        &times;
      </span>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper2"
      >
        {GalleryMobilePics}
      </Swiper>
    </BackGroundForModals>
  );
};

export default Modal;
