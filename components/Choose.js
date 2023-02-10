import React from "react";

const Choose = () => {
  return (
    <div className="relative py-20">
      <div className=" container mx-auto flex justify-between flex-col lg:flex-row md:flex-nowrap items-center flex-wrap">
        <img
          className="h-[500px] z-20 rounded-xl"
          src="/assets/IMG1.jpg"
          alt=""
        />
        <div className="flex flex-col gap-10">
          <p className="text-5xl font-bold text-black">
            Pompage solaire 17,550 kwc <br />
            METKIDS GAFSA <br />{" "}
          </p>
          <p className="text-base text-black ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
            suspendisse varius enim in eros elementum tristique. <br /> Duis
            cursus, mi quis viverra ornare, eros dolor.
          </p>
          <div className="flex gap-5 items-center text-black">
            <img src="/assets/tik.svg" alt="tik" />
            <p>This is some text inside of a div.</p>
          </div>
          <div className="flex gap-5 items-center text-black">
            <img src="/assets/tik.svg" alt="tik" />
            <p>This is some text inside of a div.</p>
          </div>
          <div className="flex gap-5 items-center text-black">
            <img src="/assets/tik.svg" alt="tik" />
            <p>This is some text inside of a div.</p>
          </div>
          <div className="flex gap-5 items-center text-black">
            <img src="/assets/tik.svg" alt="tik" />
            <p>This is some text inside of a div.</p>
          </div>
          <p className="btn btn-outline bg-[#09A79D] border-color-[#09A79D] rounded-full w-44 capitalize text-white hover:bg-[#FAAE12] text-black">
            Consulter le Projet
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div class="flex">
        <div className=" container mx-auto flex justify-between flex-col lg:flex-row md:flex-nowrap items-center flex-wrap">
          <div className="flex flex-col gap-10">
            <p className="text-5xl font-bold text-black">
              Pompage solaire 29,700 kwc MEJEL BEL-AABBES KASSERINE <br />
            </p>
            <p className="text-base text-gray-400 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
              suspendisse varius enim in eros elementum tristique. <br /> Duis
              cursus, mi quis viverra ornare, eros dolor.
            </p>
            <div className="flex gap-5 items-center text-black">
              <img src="/assets/tik.svg" alt="tik" />
              <p>This is some text inside of a div.</p>
            </div>
            <div className="flex gap-5 items-center text-black">
              <img src="/assets/tik.svg" alt="tik" />
              <p>This is some text inside of a div.</p>
            </div>
            <div className="flex gap-5 items-center text-black">
              <img src="/assets/tik.svg" alt="tik" />
              <p>This is some text inside of a div.</p>
            </div>
            <div className="flex gap-5 items-center text-black">
              <img src="/assets/tik.svg" alt="tik" />
              <p>This is some text inside of a div.</p>
            </div>
            <p className="btn btn-outline  bg-[#09A79D] border-color-[#09A79D] rounded-full w-44 capitalize text-white hover:bg-[#FAAE12] text-black">
              Consulter le Projet
            </p>
          </div>
          <img
            className="h-[500px] z-20 rounded-xl hover:object-scale-down md:flex-1 1 1 auto"
            src="/assets/IMG4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;
