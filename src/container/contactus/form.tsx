import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

import axios from "axios";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]+$/, "Invalid phone number") // Only allow digits
        .min(10, "Must be at least 10 characters")
        .max(15, "Must not exceed 15 characters")
        .required("Mobile is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      axios
        .post("http://anjalicomputereducation.com/portal/api/index.php", values)
        .then(function (response) {
          if (response.status == 201) {
            setSubmitting(false);
            resetForm();
          }
        })
        .catch(function (error) {});
    },
  });

  return (
    <div className="border border-green-500 p-5  m-auto rounded shadow-md shadow-green-500">
      <p className="text-2xl mb-8 font-semibold">Contact Now </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-[100%]">
          <label className="text-[19px] font-semibold" htmlFor="name">
            Name
          </label>
          <br />
          <input
            type="text"
            name="name"
            className="shadowBox w-[100%] border py-2 mt-1 rounded px-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="w-[100%] mt-4">
          <label className="text-[19px] font-semibold" htmlFor="email">
            Email
          </label>
          <br />
          <input
            type="text"
            name="email"
            className="shadowBox w-[100%] border py-2 mt-1 rounded px-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="w-[100%] mt-4">
          <label className="text-[19px] font-semibold" htmlFor="mobile">
            Mobile
          </label>
          <br />
          <input
            type="text"
            name="mobile"
            className="shadowBox w-[100%] border py-2 mt-1 rounded px-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
          ) : null}
        </div>

        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 border font-semibold bg-blue-600 text-white rounded"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <ClipLoader color="#fff" size={15} />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
