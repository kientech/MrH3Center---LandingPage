import React from "react";
import OurTeamItem from "./OurTeamItem";
import LineStyle from "../common/LineStyle";
import { teamMember } from "../../database/teamMembers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const OurTeamComponent = () => {
  return (
    <div className="mt-24">
      <div className="flex items-center justify-center">
        <LineStyle />
        <h1 className="px-2 font-base text-orange-400">Our Team</h1>
        <LineStyle />
      </div>
      <div className="mb-4">
        <h1 className="font-bold text-3xl text-green-600 my-2 text-center">
          Our Team Members
        </h1>
      </div>
      <div className="w-full">
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {teamMember.map((member) => (
            <SwiperSlide key={member._id}>
              <OurTeamItem
                key={member.id}
                imageUrl={member.imageMember}
                memberName={member.name}
                memberPosition={member.position}
                facebookLink={member.facebookLink}
                instagramLink={member.instagramLink}
                xLink={member.xLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeamComponent;
