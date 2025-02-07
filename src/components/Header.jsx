import { Input, Option, Select } from "@material-tailwind/react";
import React from "react";

function Header() {
  return (
    <div>
      <div className="shadow mt-4 w-full bg-white">
        <div className="flex justify-between items-center   h-[70px] shadow-md w-full">
          <div className=" w-full ml-4">
            <h1 className="text-4xl font-bold">dashboard</h1>
          </div>

          <div className="flex justify-around sm:w-full lg:w-1/4">
            <div className="w-[50px]  h-[50px]">
              <img
                className="object-cover w-full h-full rounded "
                src="https://media.istockphoto.com/id/1445597021/photo/black-man-phone-and-social-media-in-city-reading-text-message-or-communication-on-social.jpg?s=612x612&w=0&k=20&c=B7pEc-0pgtUw33hz9P5-row1Go3YwwHacUJrE-lCNgA="
                alt=""
              />
            </div>
            <div className="">
              <h1>bhjcbedc</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
