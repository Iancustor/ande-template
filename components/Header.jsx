import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const links = [
    { name: "Home", href: "/" },
    {
      name: "Pages",
      href: "#",
    },
    { name: "About", href: "/about" },
    {
      name: "Blog",
      href: "/blog",
    },
  ];
  return (
    <div className="flex bg-[rgb(255,248,240)] items-center justify-between relative text-slate-800">
      <Image
        src="/images/logoz.png"
        alt=""
        width={1080}
        height={1080}
        className="w-28 h-28 object-cover"
      />
      <div className="flex gap-6">
        {links.map((item, i) => {
          return (
            <Link key={i} href={item.href} className="hover:underline">
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex  justify-between bg-[rgb(250,245,239)] absolute  font-medium h-auto w-[40vw] z-10 border-2 border-black py-3 px-3 rounded-3xl right-32 top-20">
        <div className="text-slate-800 flex flex-col gap-2 px-5">
          <h2 className="font-bold">Pages</h2>
          <div className="flex flex-col gap-1">
            <p>Home </p>
            <p>Home 2</p>
            <p>Home 3</p>
            <p>Feature 1</p>
            <p>Feature 2</p>
            <p>Feature 3</p>
            <p>Pricing 1</p>
            <p>Pricing 2 (Ecom)</p>
            <p>Pricing 3</p>
            <p>Intergrations</p>
            <p>Request a demo</p>
            <p>About</p>
            <p>Services</p>
            <p>Career</p>
          </div>
        </div>
        <div className="text-slate-800 flex flex-col gap-2 px-5">
          <h2 className="font-bold"></h2>
          <div className="flex flex-col gap-1">
            <p>Blog</p>
            <p>Customer reviews</p>
            <p>Privacy Policy</p>
            <p>Terms and Condition</p>
            <p>Contact</p>
            <p>FAQs</p>
            <p>Help center</p>
            <p>Coming soon</p>
            <p>Link Bio</p>
            <p>Error 404</p>
            <p>Password Protected</p>
            <p>Extra components</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-slate-800 flex flex-col gap-2 px-5">
            <h2 className="font-bold">User Pages</h2>
            <div className="flex flex-col gap-1">
              <p>Login</p>
              <p>Sign up</p>
              <p>Reset Password</p>
              <p>Update Password</p>
              <p>Email confirmation</p>
            </div>
          </div>
          <div className="text-slate-800 flex flex-col gap-2 px-5">
            <h2 className="font-bold">Utility Pages</h2>
            <div className="flex flex-col gap-1">
              <p>Style Guide</p>
              <p>Instructions</p>
              <p>Lisenses</p>
              <p>Change log</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center ">
        <button className="bg-[rgb(0,49,62)] hover:bg-[rgba(0,49,62,0.83)] py-2 px-4 text-gray-200 rounded-3xl">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
