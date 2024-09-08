import React, { useState } from "react";
import { Link } from "react-router-dom";

const VolunteerComponent = () => {
  return (
    <section id="home" className="md:h-[850px] h-[400px]">
      <div className="md:w-full md:h-[690px] relative">
        <img
          src="https://cdn.dribbble.com/userupload/8883074/file/original-386aa027f303b25fc671828fa956943b.png?resize=1504x1128"
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />

        <div className="md:w-[500px] md:h-[220px] w-[340px] h-[200px] bg-green-200/80 absolute right-0 -bottom-24 md:right-10 md:-bottom-24 z-50 rounded-lg md:p-4 px-4 py-2 shadow-md">
          <h1 className="font-bold my-2 text-green-900 text-xl">
            E-Learning Mobile Application
          </h1>
          <p className="md:block hidden font-base overflow-hidden text-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad
            quaerat esse, veniam praesentium, excepturi aliquid nobis pariatur
            aliquam aperiam qui quos dolorum corrupti nostrum voluptatem,
            officia ducimus odio eligendi.
          </p>
          <p className="block md:hidden font-base overflow-hidden text-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nulla
            harum ea soluta repudiandae culpa labore rem
          </p>
          <Link
            target="_blank"
            to={"#"}
            className="font-bold px-4 py-2 rounded-lg bg-red-200 float-right md:mt-2 mb-2"
          >
            Try it!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerComponent;
