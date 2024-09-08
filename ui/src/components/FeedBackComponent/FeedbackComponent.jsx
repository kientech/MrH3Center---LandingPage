import React from "react";
import FeedbackItem from "./FeedbackItem";
import LineStyle from "../common/LineStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { feedbacks } from "../../database/feedbacks";

const FeedbackComponent = () => {
  return (
    <div className="mt-24">
      <div className="flex items-center justify-center">
        <LineStyle />
        <h1 className="px-2 font-base text-orange-400">Feedback</h1>
        <LineStyle />
      </div>
      <div className="mb-4">
        <h1 className="font-bold text-3xl text-green-600 my-2 text-center">
          What Say Our Students!
        </h1>
      </div>
      <div className="w-full">
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback._id}>
              <FeedbackItem
                feedbackDescription={feedback.feedbackDescription}
                feedbackName={feedback.feedbackName}
                course={feedback.position}
                rating={feedback.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeedbackComponent;
