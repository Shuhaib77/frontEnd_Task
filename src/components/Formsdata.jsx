import React from "react";
import { Input, Button } from "@material-tailwind/react";
function Formsdata() {
  return (
    <div>
      <div>
        <div className="inset-0 backdrop-blur-md fixed flex justify-around bg-black bg-opacity-20  items-center w-full h-full">
          <div className="bg-white shadow-2xl w-[700px] h-[550px] rounded p-5">
            <Button className="float-right">Close</Button>

            <div className="grid grid-cols-2 gap-7 place-content-center place-items-center w-full h-full">
              <Input label="name"></Input>
              <Input label="name"></Input>
              <Input label="name"></Input>
              <Input label="name"></Input>
              <Input label="name"></Input>
              <Input label="name"></Input>
              <Button className=' '>fgh</Button>
            </div>
         
           
             

          </div>
        </div>
      </div>
    </div>
  );
}

export default Formsdata;
