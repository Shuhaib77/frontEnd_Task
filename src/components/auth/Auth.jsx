import { Button, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import React from "react";
import { loginSchema } from "../../validation/loginValidation";
import { useNavigate, useParams } from "react-router-dom";

function Auth({ heading }) {

  // let {val}=useParams()
  const val="admin"
  const navigate=useNavigate()
  const { handleBlur, handleChange, handleSubmit, values, errors } =
    heading === "Register"
      ? useFormik({
          initialValues: {
            Username: "",
            password: "",
            confirmpassword: "",
            role: "",
          },
          validationSchema: loginSchema,
          onSubmit: async (values) => {},
        })
      : useFormik({
          initialValues: {
            Username: "",
            password: "",
          },
          validationSchema: loginSchema,
          onSubmit: async (values) => {},
        });
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]  ">
        <div className="bg-red-300 w-[800px] h-[400px] flex  ">
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="https://www.elegantthemes.com/blog/wp-content/uploads/2023/07/How-to-Register-a-Domain-Name.jpg"
              alt=""
            />
          </div>
  
           
            <form action="" onSubmit={handleSubmit} className="w-full grid grid-cols-1 place-content-center place-items-center p-5  gap-6 ">
            <h1 className="text-4xl font-bold">{heading}</h1>
              <Input
                label="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
              ></Input>
              <Input
                label="age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                name="age"
              ></Input>
              <Input
                label="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
              ></Input>
              <Button className="w-full" onClick={()=>{
                navigate(`/${val}/dashboard`)
              }}>submit</Button>
            </form>

        </div>
      </div>
    </>
  );
}

export default Auth;
