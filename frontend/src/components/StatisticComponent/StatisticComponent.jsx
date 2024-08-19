import React from "react";
import StatisticItem from "./StatisticItem";

const StatisticComponent = () => {
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://cdn.dribbble.com/userupload/7483025/file/original-e85909f0f9a6b190acb8eeb96b327cc2.png?resize=1504x1128')",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    height: "25vh",
  };

  return (
    <div className="mt-20 rounded-lg" style={backgroundImageStyle}>
      <div className="flex items-center justify-evenly h-[25vh]">
        {[1, 2, 3, 4].map((item) => (
          <StatisticItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default StatisticComponent;
