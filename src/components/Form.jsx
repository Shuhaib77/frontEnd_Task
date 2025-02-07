import { Input } from "@material-tailwind/react";

import React from "react";

function Form() {
  return (
    <div>
      <div className="inset-0 backdrop-blur-md fixed flex justify-around bg-black bg-opacity-80  items-center w-full h-full">
        <div className="bg-white shadow-2xl rounded p-5">
          <Button className="float-right">
            Close
          </Button>

          <Input label="name"></Input>
          <Input label="name"></Input>
          <Input label="name"></Input>
          <Input label="name"></Input>
          <Input label="name"></Input>
          <Input label="name"></Input>
          <Input label="name"></Input>
         <Button>fgh</Button>
        </div>
      </div>
    </div>
  );
}

export default Form;
