import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-[rgb(0,49,62)] px-8 flex justify-between  gap-4 ">
      <div>
        <Image
          src="/images/logof.png"
          alt=""
          width={1080}
          height={1080}
          className="w-28 h-28 object-cover"
        />

        <div className="text-gray-200 flex flex-col gap-2 px-5">
          <h2 className="font-bold">Contact</h2>
          <p>+44 (0) 161808123</p>
          <p>
            Chicago HQ Estica Cop.Macomb,
            <br />
            MI 48042
          </p>
        </div>
      </div>
      <div className="flex gap-6 py-12">
        <div className="text-gray-200 flex flex-col gap-4 px-5">
          <h2 className="font-bold">Contact</h2>
          <div className="flex flex-col gap-2">
            <p>Home </p>
            <p>Home 2</p>
            <p>Home 3</p>
            <p>Feature 1</p>
            <p>Feature 2</p>
            <p>Feature 3</p>
            <p>About</p>
            <p>Services</p>
          </div>
        </div>
        <div className="text-gray-200 flex flex-col gap-4 px-5">
          <h2 className="font-bold"></h2>
          <div className="flex flex-col gap-2">
            <p>Style Guide</p>
            <p>Instructions</p>
            <p>Changelog</p>
            <p>Lisense</p>
            <p>Link in Bio</p>
          </div>
        </div>
        <div className="text-gray-200 flex flex-col gap-4 px-5">
          <h2 className="font-bold">Utility Pages</h2>
          <div className="flex flex-col gap-2">
            <p>Style Guide</p>
            <p>Instructions</p>
            <p>Changelog</p>
            <p>Lisense</p>
            <p>Link in Bio</p>
          </div>
        </div>
        <div className="text-gray-200 flex flex-col gap-4 px-5">
          <h2 className="font-bold"></h2>
          <div className="flex flex-col gap-2">
            <p>coming soon</p>
            <p>Error 404</p>
            <p>Password Protected</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
