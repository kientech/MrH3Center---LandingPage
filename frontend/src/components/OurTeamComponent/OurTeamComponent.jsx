import React, { useEffect, useState } from "react";
import OurTeamItem from "./OurTeamItem";
import LineStyle from "../common/LineStyle";

const OurTeamComponent = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  console.log("🚀 ~ OurTeamComponent ~ teamMembers:", teamMembers);

  useEffect(() => {
    // Replace with your actual API endpoint or data fetching logic
    const fetchTeamMembers = async () => {
      const response = await fetch("http://127.0.0.1:3000/api/members");
      const data = await response.json();
      setTeamMembers(data.data);
    };

    fetchTeamMembers();
  }, []);

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
      <div className="grid md:grid-cols-4 md:gap-10 grid-cols-1 gap-y-10">
        {teamMembers.map((member) => (
          <OurTeamItem
            key={member.id}
            imageUrl={member.imageMember}
            memberName={member.name}
            memberPosition={member.position}
            facebookLink={member.facebookLink}
            instagramLink={member.instagramLink}
            xLink={member.xLink}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeamComponent;
