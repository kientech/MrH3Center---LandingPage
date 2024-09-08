import React, { useState } from "react";
import { Link } from "react-router-dom";

const VolunteerComponent = () => {
  return (
    <section id="home" className="md:h-[850px] h-[400px]">
      <div className="md:w-full md:h-[690px] relative">
        <img
          src="https://cdn.dribbble.com/userupload/9468663/file/original-a69d58bfceec4157ff9aa808d90f05e0.jpg?resize=2048x1300"
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />

        <div className="md:w-[500px] md:h-[220px] w-[250px] h-[200px] bg-green-200/80 absolute right-0 -bottom-24 md:right-10 md:-bottom-24 z-50 rounded-lg p-4 shadow-md">
          <h1 className="font-bold my-2 text-green-900 text-xl">
            Python Programing for Developer
          </h1>
          <p
            className="font-base overflow-hidden text-ellipsis"
            // style={{
            //   display: "-webkit-box",
            //   WebkitBoxOrient: "vertical",
            //   WebkitLineClamp: 2,
            //   lineClamp: 2,
            // }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad
            quaerat esse, veniam praesentium, excepturi aliquid nobis pariatur
            aliquam aperiam qui quos dolorum corrupti nostrum voluptatem,
            officia ducimus odio eligendi.
          </p>
          <Link
            target="_blank"
            to={"#"}
            className="font-bold px-4 py-2 rounded-lg bg-red-200 float-right mt-2"
          >
            Try it!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerComponent;
