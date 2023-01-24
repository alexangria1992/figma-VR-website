import React from "react";

// import images
import Img1 from "../assets/img/exp-img1.png";
import Img2 from "../assets/img/exp-img2.png";

const Experience = () => {
  return (
    <section className="bg-orange-300 mb-12 lg:mb-26">
      <div className="container mx-auto ">
        <div className="bg-purple-300 flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="bg-lime-300 flex-1 flex space-x-6 items-center lg:space-x-12">
            {/* Images */}
            <div className="bg-violet-500 self-start">
              <img src={Img1} alt="" />
            </div>
            <div className="bg-violet-500 self-end">
              <img src={Img2} alt="" />
            </div>
          </div>
          {/* TEXT */}
          <div
            className="bg-green-500 flex flex-1 flex-col items-start
          justify-center mt-6 lg:mt-0"
          >
            <h2 className="text-3xl font-bold mb-6">
              Experience In Playing Games
            </h2>
            <p className="font-secondary mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              exercitationem optio aperiam voluptates ducimus id fugiat,
              distinctio quis dolores neque non, quidem vel. Veritatis maxime
              soluta voluptatum quia qui iure.
            </p>
            <button className="btn">Get it</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
