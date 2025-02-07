import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Typography,
} from "@material-tailwind/react";

function Sidebar({ demo, role, val }) {
  const [datas, setData] = useState([]);
  const [openAccordions, setOpenAccordions] = useState({}); // Track open state for each accordion
  const navigate = useNavigate();

  console.log("Role prop:", role);
  console.log("Demo array:", demo);
  console.log("Demo val:", val);

  useEffect(() => {
    // Filter data based on role and update the state
    const filteredData = demo.filter((e) => e.role === role); // Use strict equality
    console.log("Filtered data:", filteredData);
    setData(filteredData);
  }, [demo, role]); // Add dependencies here

  console.log("Datas state:", datas);

  // Toggle the open state for a specific accordion
  const toggleAccordion = (index) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the state for the specific accordion
    }));
  };

  return (
    <div className="w-[250px] h-screen lg:flex flex-col shadow bg-white md:block hidden">
      <div className="mb-10 flex flex-col justify-around items-center mt-10">
        <h1 className="font-bold text-3xl">{role}</h1>
      </div>
      <div className="grid grid-cols-1 place-content-center place-items-center gap-10 p-3">
        {datas[0]?.value?.map((item, i) =>
          item.value === "Dashboard" ? (
            <div
              key={i}
              className="w-full mb-2 border border-gray-300 rounded-lg bg-gray-100 p-4 cursor-pointer hover:bg-gray-200"
              onClick={() => navigate(`/${val}/dashboard`)}
            >
              <h1 className="font-bold"> <span>{role}</span> {item.value} </h1>
            </div>
          ) : (
            <Accordion key={i} open={openAccordions[i] || false}>
              <AccordionHeader onClick={() => toggleAccordion(i)}>
                <Typography className="font-bold"> {item.value}</Typography>
              </AccordionHeader>
              <AccordionBody>
                {item?.data?.map((m, index) => (
                  <div
                    key={index}
                    className="pl-5 cursor-pointer"
                    onClick={() => navigate(`/${val}/${m?.url}`)}
                  >
                    <li>{m?.value}</li>
                  </div>
                ))}
              </AccordionBody>
            </Accordion>
          )
        )}
      </div>
      <div className="m-auto">
        <div className="w-[160px] h-[180px] grid place-content-center place-items-center gap-2 rounded bg-violet-400">
          <div className="bg-white w-[50px] h-[50px] rounded flex justify-center">
            <div className="flex items-center">
              <div>
                <i className="fa-solid fa-greater-than fa-lg"></i>
              </div>
              <div>
                <i className="fa-solid fa-less-than fa-lg mt-5"></i>
              </div>
            </div>
          </div>
          <h1 className="text-xl text-white font-semibold">DO bong Pro</h1>
          <h1 className="text-sm">dwedcddwwec</h1>
          <Button className="mt-2">Get Pro</Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
