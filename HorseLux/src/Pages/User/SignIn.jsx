import React, { useState } from "react";
import "../../Style/Home.css";
import face from "../../Images/face.png";
import Frame from "../../Images/Frame.png";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const navigate = useNavigate();
  const toForget = () => {
    navigate("/forgetpassword");
  };
  const toDashboard = () => {
    navigate("/dashboard");
  };
  // const validationSchema = Yup.object().shape({
  //   email: Yup.string().email("Invalid email").required("Email is required"),
  //   password: Yup.string().required("Password is required"),
  // });
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://hurseluxprojectupdate-production.up.railway.app/user-singin",
        values
      );
      console.log("API response:", response.data);
    }  catch (error) {
      console.error("API error:", error);
      console.log("show error error:", error);
    }
    setSubmitting(false);
  };
  return (
    <div>
      <div className="bg-signIn bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
        <div className="w-1/2 px-20 h-auto bg-opacity-70 bg-[#000] rounded-2xl">
          <div className="m-auto w-[70%] ">
            <h1 className="text-white font-[Quicksand] text-[40px] font-[700] leading-[60px] ">
              Welcome
            </h1>
            <p className="font-[Quicksand] text-[22px] font-[600]  text-white">
              Sign in to continue
            </p>
          </div>

          <div className="flex flex-col gap-y-3 py-3 w-full items-center justify-center">
            <div className="flex flex-col gap-y-2 w-full items-center justify-center">
              <Formik
                initialValues={{ email: "", password: "" }}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="w-full">
                    <div className="flex flex-col gap-y-2 w-[70%] m-auto items-center justify-center">
                      <div className="text-start  w-full  px-3 text-white">
                        <label className="text-[16px] font-[600] font-[Source Sans Pro]">
                          Email
                        </label>
                      </div>
                      <Field
                        type="email"
                        name="email"
                        placeholder="adamsmith@gmail.com"
                        className="rounded-2xl py-2 w-full outline-none px-4 bg-[#EBEEF2] "
                      ></Field>
                      <ErrorMessage name="email" component="div" />
                      <div className="text-start mt-3  w-full  px-3 text-white">
                        <label className="text-[16px] font-[600] font-[Source Sans Pro]">
                          Password
                        </label>
                      </div>
                      <div className="relative w-full rounded-2xl bg-[#EBEEF2]">
                        <Field
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="*****************"
                          className=" py-2 rounded-2xl outline-none px-4 bg-[#EBEEF2] w-[70%]"
                        />
                        <ErrorMessage name="password" component="div" />
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
                      <div className="flex items-center gap-x-2  w-full py-3">
                        <input type="checkbox"/>
                        <label className="text-white text-[14px] font-[600]">Remember me</label>
                      </div>
                      <button onClick={toForget} className="text-white text-[16px] font-[600]">Forgot the Password?</button>
                      <button
                        className="w-full text-[quacksand] mt-4 py-2 border justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]"
                        type="submit"
                        disabled={isSubmitting}
                        // onClick={toDashboard}
                      >
                        Sign In
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <p className="text-[16px] text-white font-[400]">
                or continue with
              </p>
              <div className="flex items-center gap-x-12">
                <div className="flex items-center text-white gap-x-2">
                  <img src={face} className="w-[24px] h-[24px]" />
                  <p>Facebook</p>
                </div>
                <div className="flex text-white items-center gap-x-2">
                  <img src={Frame} className="w-[24px] h-[24px]" />
                  <p>Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
