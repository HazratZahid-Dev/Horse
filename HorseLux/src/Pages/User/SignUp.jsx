import React, { useState } from "react";
import "../../Style/Home.css";
import face from "../../Images/face.png";
import Frame from "../../Images/Frame.png";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPass, setShowPass] = React.useState(false);
  const[message,setMessage]=useState('');
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phone: Yup.string().required("Phone No is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    const res=axios.post("https://hurseluxprojectupdate-production.up.railway.app/user",values).
    then(response=>{setMessage(response.values)});
    if(!message){
      setMessage(res.values);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    
    }else{
      setMessage("some things went wrong!")
    }
  
    // Add your navigation logic here, e.g., navigate("/dashboard")
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // const toDashboard = () => {
  //  
  // };

  const handleTogglePass = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };

  return (
    <div>
      <div className="bg-signIn bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
        <div className="w-[80%] p-5 h-auto  flex flex-col gap-y-4 bg-opacity-70 bg-[#000] rounded-2xl">
          <h1 className="text-white font-[Quicksand] text-[40px] font-[700] leading-[60px] ">
            Create account,
          </h1>
          <p className="text-[22px] font-[Quicksand] font-[600] text-white">
            Sign up to get started
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="grid grid-cols-2  gap-x-20">
                <div className="flex flex-col gap-y-2 w-full items-center justify-center">
                  <div className="text-start  w-full px-3 text-white">
                    <label htmlFor="name">Name</label>
                  </div>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Adam Smith"
                    className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
                  />
                  <p className="w-full text-start">
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600 text-sm text-start "
                    />
                  </p>
                </div>
                <div className="flex flex-col gap-y-2 w-full items-center justify-center">
                  <div className="text-start  w-full px-3 text-white">
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="relative w-full rounded-2xl bg-[#EBEEF2]">
                    <Field
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="py-2 rounded-2xl outline-none px-4 bg-[#EBEEF2] w-[70%]"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <BiHide size={20} />
                      ) : (
                        <BiShow size={20} />
                      )}
                    </button>
                  </div>
                  <p className="text-start w-full">
                    <p className="text-start w-full">
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </p>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-20">
                <div className="flex flex-col gap-y-2 w-full items-center justify-center">
                  <div className="text-start  w-full px-3 text-white">
                    <label htmlFor="email">Email</label>
                  </div>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="adamsmith@gmail.com"
                    className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
                  />
               <p className="w-full text-start">
               <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm"
                  />
               </p>
                </div>
                <div className="flex flex-col gap-y-2 w-full items-center justify-center">
                  <div className="text-start  w-full px-3 text-white">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                  </div>
                  <div className="relative w-full rounded-2xl bg-[#EBEEF2]">
                    <Field
                      type={showPass ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Password"
                      className="py-2 rounded-2xl outline-none px-4 bg-[#EBEEF2] w-[70%]"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={handleTogglePass}
                    >
                      {showPass ? <BiHide size={20} /> : <BiShow size={20} />}
                    </button>
                  </div>
                  <p className="w-full  text-start">
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-600 text-start w-full text-sm"
                    />
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-20">
                <div className="flex flex-col gap-y-2 w-full items-center justify-center">
                  <div className="text-start  w-full px-3 text-white">
                    <label htmlFor="phone">Phone No</label>
                  </div>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+44 943456779"
                    className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
                  />
                  <p className=" w-full text-start">
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </p>
                </div>
              </div>
              <div className="text-center mt-2 w-[30%] flex flex-col gap-y-3 m-auto">
                <button
                  className="w-full py-2 border justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]"
                  type="submit"
                >
                  Sign up
                </button>
                <p className="text-[16px] text-white font-[400]">
                  or continue with
                </p>
                <div className="flex items-center gap-x-12  text-center justify-center">
                  <div className="flex items-center text-white gap-x-2">
                    <img
                      src={face}
                      alt="Facebook Icon"
                      className="w-[24px] h-[24px]"
                    />
                    <p>Facebook</p>
                  </div>
                  <div className="flex text-white text-center items-center gap-x-2">
                    <img
                      src={Frame}
                      alt="Google Icon"
                      className="w-[24px] h-[24px]"
                    />
                    <p>Google</p>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
