import React from 'react';
import Sidebar from '../Compunents/Sidebar';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactUs = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-12 w-full'>
        <h2 className="text-[28px] font-[700] py-2 ">Contact Us</h2>
        <hr />
        <Formik
          initialValues={{
            message: '',
          }}
          onSubmit={(values, { resetForm }) => {
            // Handle form submission here
            console.log(values);
            // Reset the form after submission
            resetForm();
          }}
        >
          {() => (
            <Form>
              <div className='py-12'>
                <label className='text-[16px] font-[600] px-4 '>Write Message</label>
                <br />
                <Field
                  as="textarea"
                  name="message"
                  className='w-[380px] mt-2 h-[213px] bg-[#E4E4E4] rounded-[20px] outline-none p-3'
                />
              </div>
              <br />
              <button
                className='h-[53px] rounded-full w-[380px] bg-[#000032] text-white'
                type='submit'
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactUs;
