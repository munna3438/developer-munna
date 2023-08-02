import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./gallery.css";

//slide image
const images = [
  {
    id: 1,
    img: "assets/image/slide1.png",
  },
  {
    id: 2,
    img: "assets/image/slide2.png",
  },
  {
    id: 3,
    img: "assets/image/slide3.png",
  },
  {
    id: 4,
    img: "assets/image/slide4.png",
  },
  {
    id: 5,
    img: "assets/image/slide5.png",
  },
  {
    id: 6,
    img: "assets/image/slide6.png",
  },
  {
    id: 7,
    img: "assets/image/slide7.png",
  },
  {
    id: 8,
    img: "assets/image/slide8.png",
  },
  {
    id: 9,
    img: "assets/image/slide9.png",
  },
  {
    id: 10,
    img: "assets/image/slide10.png",
  },
  {
    id: 11,
    img: "assets/image/slide11.png",
  },
  {
    id: 12,
    img: "assets/image/slide12.png",
  },
  {
    id: 13,
    img: "assets/image/slide13.png",
  },
  {
    id: 14,
    img: "assets/image/slide14.png",
  },
  {
    id: 15,
    img: "assets/image/slide15.png",
  },
  {
    id: 16,
    img: "assets/image/slide16.png",
  },
  {
    id: 17,
    img: "assets/image/slide17.png",
  },
  {
    id: 18,
    img: "assets/image/slide18.png",
  },
  {
    id: 19,
    img: "assets/image/slide19.png",
  },
  {
    id: 20,
    img: "assets/image/slide20.png",
  },
  {
    id: 21,
    img: "assets/image/slide21.png",
  },
  {
    id: 22,
    img: "assets/image/slide22.png",
  },
];

const Gallery = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="section testimonial" id="testimonial">
      <div className="t-title my-title-style">
        <h1>
          A Glimpse into  <span>the Work</span> of My Amazing Clients...
        </h1>
      </div>
      <div className="t-slide">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper">
          {images.map((img) => {
            return (
              <SwiperSlide>
                <div className="slide-box">
                  <img key={img.id} src={img.img} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>

        <div
          className="i-blur"
          style={{
            top: "13rem",
            right: "6rem",
            zIndex: 1,
          }}></div>
      </div>
    </div>
  );
};

export default Gallery;
