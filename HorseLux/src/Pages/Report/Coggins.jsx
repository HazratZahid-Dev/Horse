import React, { useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Coggins = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    date: Yup.string().required("Date is required"),
    nextDueDate: Yup.string().required("Next Due Date is required"),
    comments: Yup.string(),
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-12 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-[35px] font-[700] leading-[45px] py-1">
            Coggins
          </h2>
          <button type="button">
            <BsFillTrash3Fill className="text-2xl" />
          </button>
        </div>
        <hr />
        <div className="py-12">
          <h2 className="text-[24px] leading-[36px] font-[700]">Detail</h2>
          {/* Wrap your form with Formik */}
          {/* <div className="flex w-[80%] border items-center justify-between"> */}
          <Formik
            initialValues={{
              date: "",
              nextDueDate: "",
              comments: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // Handle form submission logic here
              console.log(values);
              resetForm(); // Reset the form after submission
            }}
          >
            {/* Use the Form component for your form */}
            <Form className=" flex w-[90%]   gap-x-20  space-y-3">
              <div className="w-[50%] space-y-3">
                <div className="w-full">
                  <label
                    htmlFor="date"
                    className="px-[14px] text-[16px] font-[600]"
                  >
                    Date
                  </label>
                  <br />
                  {/* Use Field components for input fields */}
                  <Field
                    type="text"
                    id="date"
                    name="date"
                    placeholder="Date"
                    className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                  />
                  {/* Use ErrorMessage for field-specific error messages */}
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-[100%]">
                  <label
                    htmlFor="nextDueDate"
                    className="px-[14px] text-[16px] font-[600]"
                  >
                    Next Due Date
                  </label>
                  <br />
                  <Field
                    type="text"
                    id="nextDueDate"
                    name="nextDueDate"
                    placeholder="Next Due Date"
                    className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                  />
                  <ErrorMessage
                    name="nextDueDate"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-[100%]">
                  <label
                    htmlFor="comments"
                    className="px-[14px] text-[16px] font-[600]"
                  >
                    Comments
                  </label>
                  <br />
                  <Field
                    as="textarea"
                    id="comments"
                    name="comments"
                    placeholder="Comments"
                    className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-20 rounded-[10px]"
                  />
                  <ErrorMessage
                    name="comments"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#000032] mt-2 text-white w-[100%] px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
                >
                  Save
                </button>
              </div>
              <div className="w-[50%]  flex   ">
              <div className="">
              <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        setSelectedImage(e.target.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <label htmlFor="imageInput" className="cursor-pointer text-[16px] font-[600] text-[#2C3A4B]">
                  Attachment
                </label>
                <div className=" max-w-[270px] max-h-[180px] ">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-[270px] h-[180px] rounded-[15px]"
                  />
                )}
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

export default Coggins;
