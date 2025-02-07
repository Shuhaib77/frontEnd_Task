import React from "react";
import { Input, Button } from "@material-tailwind/react";

function Formsdata({ onClose }) {
  
  return (
    <div>
      <div className="flex justify-center items-center w-full">
        {/* <div className="inset-0 backdrop-blur-md fixed flex justify-around bg-black bg-opacity-80 items-center w-[700px]"> */}
          <div className="bg-white shadow-2xl  w-[900px] h-[500px] rounded p-5">
          
            <form  className="h-full w-full">
              <div className="grid grid-cols-2 gap-7 place-content-center place-items-center w-full h-full">
                <Input label="First Name" required />
                <Input label="Last Name" required />
                <Input label="Email" type="email" required />
                <Input label="Phone Number" type="tel" required />
                <Input label="Address" required />
                <Input label="City" required />
                <div className="w-full text-center col-span-2">
                  <Button type="submit" className="w-1/2">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Formsdata;