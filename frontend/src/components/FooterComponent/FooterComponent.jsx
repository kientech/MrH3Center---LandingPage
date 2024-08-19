import React from "react";
import LineStyle from "../common/LineStyle";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiMiniChevronRight } from "react-icons/hi2";

const FooterComponent = () => {
  return (
    <footer className="bg-[#052e16] text-white py-10 mt-40 rounded-lg">
      <div className="w-auto mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-10">
        <div>
          <div className="flex items-center mb-4">
            <h4 className="text-lg font-bold mr-2">Address</h4>
            <LineStyle />
          </div>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center gap-x-4 group">
                <HiOutlineRocketLaunch />
                <span className="group-hover:tracking-wide transition-all group-hover:text-orange-500 font-semibold">
                  Ho Chi Minh City, Vietnam
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center gap-x-4 group">
                <HiOutlineRocketLaunch />
                <span className="group-hover:tracking-wide transition-all group-hover:text-orange-500 font-semibold">
                  Ho Chi Minh City, Vietnam
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center gap-x-4 group">
                <HiOutlineRocketLaunch />
                <span className="group-hover:tracking-wide transition-all group-hover:text-orange-500 font-semibold">
                  Ho Chi Minh City, Vietnam
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <h4 className="text-lg font-bold mr-2">Quick Link</h4>
            <LineStyle />
          </div>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center gap-x-4 group">
                <HiMiniChevronRight />
                <span className="group-hover:tracking-wide transition-all group-hover:text-orange-500 font-semibold">
                  About Us
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center gap-x-4 group">
                <HiMiniChevronRight />
                <span className="group-hover:tracking-wide transition-all group-hover:text-orange-500 font-semibold">
                    Courses
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center gap-x-4 group">
                <HiMiniChevronRight />
                <span className="group-hover:tracking-wide transition-all group-hover:text-orange-500 font-semibold">
                  Our Projects
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <h4 className="text-lg font-bold mr-2">Gallery</h4>
            <LineStyle />
          </div>
          <ul className="grid grid-cols-2 gap-2">
            <li className="mb-2">
              <a href="#" className="flex items-center gap-x-4 group">
                <img src="https://cdn.dribbble.com/userupload/5208245/file/original-c2c175364129dabfb435453a5aed5781.jpg?resize=640x480&vertical=center" alt="" className="w-full h-full object-cover rounded-lg" />
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center gap-x-4 group">
                <img src="https://cdn.dribbble.com/userupload/5208245/file/original-c2c175364129dabfb435453a5aed5781.jpg?resize=640x480&vertical=center" alt="" className="w-full h-full object-cover rounded-lg" />
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center gap-x-4 group">
                <img src="https://cdn.dribbble.com/userupload/5208245/file/original-c2c175364129dabfb435453a5aed5781.jpg?resize=640x480&vertical=center" alt="" className="w-full h-full object-cover rounded-lg" />
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center gap-x-4 group">
                <img src="https://cdn.dribbble.com/userupload/5208245/file/original-c2c175364129dabfb435453a5aed5781.jpg?resize=640x480&vertical=center" alt="" className="w-full h-full object-cover rounded-lg" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <h4 className="text-lg font-bold mr-2">Newsletter</h4>
            <LineStyle />
          </div>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, ullam optio minus quo fugit deleniti!</p>
            <input type="text" placeholder="example@gmail.com" className="p-2 rounded-full w-full my-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
