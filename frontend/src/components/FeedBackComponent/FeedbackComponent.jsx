import React, { useState, useEffect } from "react";
import axios from "axios";
import FeedbackItem from "./FeedbackItem";
import LineStyle from "../common/LineStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const FeedbackComponent = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3000/api/feedbacks");
      setFeedbacks(response.data.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

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
          slidesPerView={3}
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
              slidesPerView: 1,
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
