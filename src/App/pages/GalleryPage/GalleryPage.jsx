import React, { useContext } from "react";
import useGetAllPics from "../../../hooks/useGetAllPics";
import { AppContext } from "../../provider/AppProvider";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./GalleryPage.scss";
import Section from "../../components/Section/Section";
import GalleryPicFromDefaultPage from "../../components/GalleryPicFromDefaultPage/GalleryPicFromDefaultPage";
import Modal from "../../components/Modal/Modal";

const API_KEY = process.env.REACT_APP_API_KEY;

const Settings = {
  className: "galleryPage",
  id: "gallery",
  dataNaviitem: ".Projects--NaviItem",
  title: "REALIZACJE",
};

const GalleryPage = React.memo(() => {
  const { handleClick, HOST, allPics, windowWidth } = useContext(AppContext);

  const { data, loading, error } = useGetAllPics(HOST, API_KEY);

  if (loading || error) return;

  const howPicsInVisible =
    Math.floor(windowWidth / 250) === 1 ? 2 : Math.floor(windowWidth / 250);

  return (
    <Section {...Settings}>
      {console.log(Math.floor(windowWidth / 250))}
      <div className="GalleryPicOnPage_box">
        <Swiper
          spaceBetween={10}
          grid={{ rows: 2 }}
          slidesPerView={howPicsInVisible}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          modules={[Navigation, Pagination, Grid]}
        >
          {data.map((image) => (
            <SwiperSlide key={image.id + image.first + 2}>
              <GalleryPicFromDefaultPage
                image={image}
                HOST={HOST}
                onClick={() => handleClick(image.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {allPics && <Modal />}
    </Section>
  );
});

export default GalleryPage;
