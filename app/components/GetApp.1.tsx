import React from "react";
import Button from "./Button";
import Image from "next/image";

export const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get a slot TODAY!
          </h2>
          <p className="regular-16 text-gray-10">
            <i>Dec 14 - Jan 5th</i>
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Email"
              icon="/email.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Call"
              icon="/phone21.svg"
              variant="btn_white"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end ">
          <Image src="/Girl2.png" alt="girl" width={550} height={950} />
        </div>
      </div>
    </section>
  );
};
