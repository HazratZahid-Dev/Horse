import React, { useState } from "react";
import "../../Style/Home.css";
import face from "../../Images/face.png";
import Frame from "../../Images/Frame.png";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { baseUrl } from "../../config/BaseUrl";
import axios from "axios";

const ResetPassword = () => {
  const { email } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const handleTogglePass = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New Password is required"),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm New Password is required"),
  });

  return (
    <div>
      <div className="bg-signIn bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
        <div className="w-1/2 px-20 h-auto bg-opacity-70 bg-[#000] py-8 rounded-2xl">
          <div className="m-auto w-[70%] ">
            <h1 className="text-white font-[Quicksand] text-[40px] font-[700] leading-[60px] ">
              Reset Password
            </h1>
            <p className="font-[Quicksand] text-[22px] font-[600]  text-white">
              Sign in to continue
            </p>
          </div>

          <Formik
            initialValues={{
              newPassword: "",
              confirmNewPassword: "",
              rememberMe: false, // Initial checkbox value
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              try {
                const response = await axios.post(`${baseUrl}/reset-password`, {
                  email,
                  password: values.newPassword,
                  confirmPassword: values.confirmNewPassword,
                });
                if (response.status === 200) {
                  alert("Password reset successfully");
                  navigate("/signin");
                }
              } catch (err) {
                console.log("Error:", err.message);
              }
            }}
          >
            <Form>
              <div className="flex flex-col gap-y-3 py-3 w-full items-center justify-center">
                <div className="flex flex-col gap-y-1 w-full items-center justify-center">
                  <div className="text-start  w-[70%] px-3 text-white">
                    <label className="text-[16px] font-[600] font-[Source Sans Pro]">
                      New Password
                    </label>
                  </div>
                  <div className="w-[70%]">
                    <div className="relative w-[100%] rounded-2xl bg-[#EBEEF2]">
                      <Field
                        type="password"
                        name="newPassword"
                        placeholder="Password"
                        className="py-2 rounded-2xl outline-none px-4 bg-[#EBEEF2] w-full"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={handleTogglePass}
                      >
                        {showPass ? <BiHide size={20} /> : <BiShow size={20} />}
                      </button>
                    </div>
                    <p className="ml-[16px] mt-1">
                      <ErrorMessage
                        name="newPassword"
                        component="div"
                        className="text-red-500 text-[14px]"
                      />
                    </p>
                  </div>
                </div>
                <div className="text-start  w-[70%] px-3 text-white">
                  <label className="text-[16px] font-[600] font-[Source Sans Pro]">
                    Confirm New Password
                  </label>
                </div>
                <div className="w-[70%]">
                  <div className="relative w-[100%] rounded-2xl bg-[#EBEEF2]">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="confirmNewPassword"
                      placeholder="Password"
                      className="py-2 rounded-2xl outline-none px-4 bg-[#EBEEF2] w-full"
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
                  <p className="ml-[16px] mt-1">
                    <ErrorMessage
                      name="confirmNewPassword"
                      component="div"
                      className="text-red-500 text-[14px]"
                    />
                  </p>
                </div>
                <div className="text-start mt-4 w-[70%] px-4 text-white flex gap-x-2">
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    className="form-checkbox"
                  />
                  <label className="text-[14px]  font-[600] font-[Source Sans Pro]">
                    Remember me
                  </label>
                </div>
                <button
                  // onClick={toApp}
                  className="w-[70%] py-2 border font-[Source Sans Pro] justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
