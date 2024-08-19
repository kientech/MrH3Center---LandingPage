import React from "react";
import LineStyle from "../common/LineStyle";

const AboutUsIntro = () => {
  return (
    <section id="about-us" className="md:mt-24 mt-16 md:flex md:items-center md:justify-between ">
      <div className="content md:w-[50%]">
        <div className="flex items-center gap-3">
          <h1 className="font-bold md:text-2xl text-xl text-green-900">About Us</h1>
          <LineStyle />
        </div>
        <div>
          <h1 className="font-bold text-4xl my-2 text-gray-900">
            #1 Digital solution with 10 years of experience
          </h1>
          <p className="font-base mt-4 md:text-lg text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            assumenda, quibusdam aliquam sint tenetur eos rem. Consectetur vel
            praesentium laboriosam id maxime, incidunt debitis maiores non
            molestias, corrupti quasi fugit!
          </p>
          <ul className="my-4 md:text-lg text-sm">
            <li>- Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>- Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>- Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <button className="font-base text-red-500 px-8 py-2 mt-2 rounded-lg bg-green-100 hover:bg-green-300 transition-all">Read more</button>
        </div>
      </div>
      <div className="image md:w-[50%]">
        <img
          src="https://cdn.dribbble.com/users/5027649/screenshots/17501709/media/80a996e11e2e8c3eb4f3e461c0124091.jpg?resize=1600x1200&vertical=center"
          alt="" className="md:rounded-full mt-2 rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutUsIntro;
