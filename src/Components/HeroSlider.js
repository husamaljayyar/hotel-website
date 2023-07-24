// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import required modules
import { EffectFade, Autoplay } from "swiper";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: "/assets/images/hero-slider/1.jpg",
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: "/assets/images/hero-slider/2.jpg",
    btnText: "See our rooms",
  },
];

const HeroSlider = () => {
  return (
    <>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        Loop={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="heroSlider h-[600px] hg:h=[860px]"
      >
        {slides.map((slide, index) => {
          // destructure slide
          const { title, bg, btnText } = slide;
          return (
            <SwiperSlide
              className="h-full bg-pink-400 relative flex justify-center items-center"
              key={index}
            >
              <div className="z-20 text-white text-center">
                <div className="uppercase font-tertiary tracking-[6px] mb-5">
                  Just Enjoy and relax
                </div>
                <h1
                  className="text-[32px] uppercase  tracking-[10px] font-extralight  max-w-[920px] 
              lg:text-[55px] leading-tight mb-6"
                >
                  {title}
                </h1>
                <button className="btn btn-lg  text-white  border-2 border-white   mx-auto  ">
                  {btnText}
                </button>
              </div>

              <div className="absolute top-0 w-full h-full">
                <img className="object-cover h-full w-full" src={bg} alt="" />
              </div>
              {/*  overLay  */}
              <div className="absolute w-full h-full bg-black/50"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeroSlider;
