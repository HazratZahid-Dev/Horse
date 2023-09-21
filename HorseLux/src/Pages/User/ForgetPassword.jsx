import React, { useState } from "react";
import "../../Style/Home.css";
import face from "../../Images/face.png";
import Frame from "../../Images/Frame.png";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const toDashboard = () => {
    navigate("/forgotpassword");
  };

  return (
    <div>
      <div className="bg-signIn bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
        <div className="w-1/2 px-20 flex flex-col gap-y-8 py-16 h-auto bg-opacity-70 bg-[#000] rounded-2xl">
          <div className="m-auto w-[70%] ">
            <h1 className="text-white font-[Source Sans Pro] text-[40px] font-[700] leading-[60px] ">
              Forget Password
            </h1>
            <p className="font-[Source Sans Pro] mt-3 text-[14px] font-[600] text-white">
              Please enter your Email, we will send the OTP in this phone
              number.
            </p>
          </div>

          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Handle form submission here
              // You can access the form values in the 'values' parameter
              console.log(values);
              // Redirect to the desired route
              toDashboard();
            }}
          >
            <Form>
              <div className="flex flex-col gap-y-5 py-3 w-full items-center justify-center">
                <div className="flex flex-col w-[70%] items-start justify-center">
                  <div className="text-start w-[100%] px-3 text-white">
                    <label className="text-[16px] font-[600] font-[Source Sans Pro]">
                      Email
                    </label>
                  </div>
                  <Field
                    type="text"
                    name="email"
                    placeholder="adamsmith@gmail.com"
                    className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-[100%] mb-1"
                  />
                  <p className=" w-full text-start ml-[15px]">
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </p>
                </div>

                <button
                  className="w-[70%] py-2 border justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
