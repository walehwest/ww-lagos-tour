import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3 text-green-50">
          WE ARE HERE FOR YOU !
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[500px]">
            You Get Quality, Luxury & Comfort with US.
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            WW Lagos Tour offers a comprehensive package. You're in good hands
            with US. From flight reservations, transportation, and hotel
            bookings to serving of delicious inter-continental dishes would be
            handled by the team working 24/7. It's a hassle-free experience
            where all you have to do is sit back, relax, and enjoy the journey.
            Also, in the case of not having a visa yet, we can help you with the
            whole application process and provide guidance on the required
            documents needed for a smooth approval.
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full ">
        <Image
          src="/lagos1.jpg"
          alt="boat"
          width={1440}
          height={200}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 ">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />

          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Start-Track</p>
              </div>
              <p className="bold-20 mt-2">Anywhere</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Destination</p>

              <h4 className="bold-20 mt-2 whitespace-nowrap">Lagos</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
