import React from "react";
// import images
import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24 ">
      <div className="container mx-auto bg-green-600 ">
        <h2 className="text-3xl font-bold mb-6">Mixed Reality Headsets</h2>

        {/* GRID */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {/* ITEM */}
          <div className="bg-purple-500 relative">
            <img src={Headset1} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                ullam, veritatis modi molestiae quasi laborum, ratione omnis
                officia laudantium labore laboriosam pariatur similique
                repudiandae at maxime facere rerum sequi itaque!
              </p>
            </div>
          </div>

          <div className="bg-purple-500 relative">
            <img src={Headset2} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">AIoT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                ullam, veritatis modi molestiae quasi laborum, ratione omnis
                officia laudantium labore laboriosam pariatur similique
                repudiandae at maxime facere rerum sequi itaque!
              </p>
            </div>
          </div>

          <div className="bg-purple-500 relative">
            <img src={Headset3} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">HoloLens</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                ullam, veritatis modi molestiae quasi laborum, ratione omnis
                officia laudantium labore laboriosam pariatur similique
                repudiandae at maxime facere rerum sequi itaque!
              </p>
            </div>
          </div>

          <div className="bg-purple-500 relative">
            <img src={Headset4} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">TPCASTT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                ullam, veritatis modi molestiae quasi laborum, ratione omnis
                officia laudantium labore laboriosam pariatur similique
                repudiandae at maxime facere rerum sequi itaque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
