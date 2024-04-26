import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="bg-[rgb(235,255,116)] py-16 rounded-3xl  px-8">
      <div className="flex ">
        <div className="flex flex-col gap-8 w-[70vw] ">
          <h2 className="text-[4rem]  font-bold text-slate-800">
            Providing the fastest <br /> online transactions
          </h2>
          <p className="text-slate-800 ">
            Experience the unparalleled speed and efficiency of our online
            transaction platform. <br /> With our state-of-the-art technology.
          </p>
          <div className="flex  gap-4">
            <span>
              <p className="text-slate-800">Expert financial guidance</p>
            </span>
            <span>
              <p className="text-slate-800">24/7 Client support</p>
            </span>
          </div>
          <div className="flex gap-4">
            <button className="bg-[rgb(0,49,62)] hover:bg-[rgba(0,49,62,0.83)] py-2 px-4 text-gray-200 rounded-3xl">
              Get Started
            </button>
            <button className="flex bg-gray-100 hover:bg-transparent  border border-black py-2 px-4 gap-2 text-slate-800 rounded-3xl">
              Learn More
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="flex w-[35vw] relative">
          <div className="">
            <Image
              src="/images/totalspending.jpg"
              alt=""
              width={1080}
              height={1080}
              className="w-auto h-24 -right-12 top-3 object-cover absolute rounded-2xl"
            />
          </div>
          <Image
            src="/images/lady.jpg"
            alt=""
            width={1080}
            height={1080}
            className="object-cover w-full h-auto rounded-3xl "
          />
          <div className="">
            <Image
              src="/images/graph.jpg"
              alt=""
              width={1080}
              height={1080}
              className="w-60 rounded-3xl -left-32 bottom-14 h-auto absolute object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
