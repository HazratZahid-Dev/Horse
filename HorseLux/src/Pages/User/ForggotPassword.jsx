import React, { useEffect, useRef, useState } from "react";
import "../../Style/Home.css";
import face from "../../Images/face.png";
import Frame from "../../Images/Frame.png";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { SetAuth } from "../../store/Slices/AuthSlice";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../config/BaseUrl";

const ForggotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Refs for input fields

  const handleInputChange = (event, index) => {
    const value = event.target.value;
    const nextIndex = index + 1;

    if (value.length === 1 && nextIndex < inputRefs.length) {
      inputRefs[nextIndex].current.focus();
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`${baseUrl}/verify-otp`, values);
      if (response.status === 200) {
        console.log("API response:", response.status);
        // console.log(response.data.User);
        console.log("the values is********", values);
        dispatch(SetAuth(response.data.User));
        navigate("/resetpassword");
      }
    } catch (error) {
      console.log("API response:", error.request.status);
      console.error("API error:", error);
      console.log("show error error:", error);
      alert("Invilid OTP");
    }
    setSubmitting(false);
  };
  // count down
  const [countdown, setCountdown] = useState(56); // Initial countdown value

  useEffect(() => {
    let intervalId;

    // Start the countdown timer
    if (countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000); // Update the countdown every 1 second
    }

    // Clear the interval when the countdown reaches 0
    if (countdown === 0) {
      clearInterval(intervalId);
    }

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);
  return (
    <div>
      <div className="bg-signIn bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
        <div className="w-1/2 flex flex-col  py-10 px-20 h-auto bg-opacity-70 bg-[#000] rounded-2xl">
          <div className="m-auto w-[70%] text-center">
            <h1 className="text-white font-[Source Sans Pro] text-[40px] font-[700] leading-[60px] ">
              Forgot password
            </h1>
            <p className="font-[Source Sans Pro] mt-8 text-[16px] font-[400]  text-white">
              Code has been send to adam*******@gmail.com{" "}
            </p>
          </div>
          <Formik
            initialValues={{
              numberOne: "",
              numberTwo: "",
              numberThree: "",
              numberFour: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="m-auto w-[70%] mt-8 text-center flex items-center gap-x-3">
                {inputRefs.map((inputRef, index) => (
                  <Field
                    key={index}
                    type="text"
                    name={`number${index + 1}`}
                    onChange={(event) => handleInputChange(event, index)}
                    className="w-[83px] h-[68px] text-[29px] font-[600] font-[Source Sans Pro] rounded-[20px] text-center outline-none"
                    ref={inputRef}
                    maxLength="1" // Limit input to one character
                  />
                ))}
              </div>
              <div className="font-[Source Sans Pro]  flex flex-col  items-center justify-center">
                {countdown === 0 ? (
                  <Link to='/forgetpassword' className="text-[16px] text-white font-[400] mt-8">
                    Resend OTP
                  </Link>
                ) : (
                  <p className="text-[16px] text-white font-[400] mt-8">
                    Resend code in {countdown} s
                  </p>
                )}
                <button
                  // onClick={toReset}
                  className="w-[70%] font-[Source Sans Pro] py-2 mt-5 border text-[18px] justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]"
                  type="submit"
                >
                  Verify
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForggotPassword;
