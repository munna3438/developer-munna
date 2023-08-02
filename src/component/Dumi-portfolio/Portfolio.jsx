import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./portfolio.css";
const imgs = [
  {
    id: 1,
    img: "assets/image/img1.jpg",
  },
  {
    id: 2,
    img: "assets/image/img2.jpg",
  },
  {
    id: 3,
    img: "assets/image/img3.jpg",
  },
  {
    id: 4,
    img: "assets/image/img4.jpg",
  },
  {
    id: 5,
    img: "assets/image/img5.jpg",
  },
];
const Portfolio = () => {
  return (
    <div className="section portfolio" id="portfolio">
      <div className="p-tytle my-title-style">
        <h1>Me! With My</h1>
        <h1>
          <span>Friends</span>
        </h1>
      </div>
      <div className="p-content">
        <Swiper
          className="pSlider"
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={3}>
          {imgs.map((img) => {
            return (
              <SwiperSlide>
                <img key={img.id} src={img.img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
