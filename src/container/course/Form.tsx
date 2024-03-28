import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const Form = ({ CourseContent } : any) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      qualification: "",
      center_name: "",
      course_name: CourseContent.courseId,
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
      qualification: Yup.string().required("Qualification is required"),
      center_name: Yup.string().required("Location is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      axios.post('https://anjalicomputereducation.com/api/?key=91d671f835b9d92970ba5460e8be0dc2d6c49356&req_data=enq', values)
        .then((response) => {
          if (response.status === 201) {
            setSubmitting(false);
            resetForm();
            console.log(JSON.stringify(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const centreArray = [
    {
      id: 1,
      name: "Tambaram",
      ccode: "anjali01",
    },
    {
      id: 2,
      name: "Selaiyur",
      ccode: "anjali02",
    },
    {
      id: 3,
      name: " Chengalpattu",
      ccode: "anjali03",
    },
    {
      id: 4,
      name: "Guduvancheery",
      ccode: "anjali04",
    },
  ];

  return (
    <div className="border border-green-500 p-5 w-[100%] m-auto rounded shadow-md shadow-green-500">
      <p className="text-3xl mb-8 font-semibold">Enquiry Now </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-[100%] mb-4">
          <label className="text-[19px] font-semibold">Course</label>
          <br />
          <input
            type="text"
            disabled
            className="shadowBox w-[100%] border py-2 mt-1 rounded px-2"
            value={CourseContent.courseTitle}
          />
          <input
            type="hidden"
            name="course_name"
            value={formik.values.course_name}
          />
        </div>
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
        <div className="w-[100%] mt-4">
          <label className="text-[19px] font-semibold" htmlFor="qualification">
            Qualification
          </label>
          <br />
          <input
            type="text"
            name="qualification"
            className="shadowBox w-[100%] border py-2 mt-1 rounded px-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.qualification}
          />
          {formik.touched.qualification && formik.errors.qualification ? (
            <div className="text-red-500 text-sm">
              {formik.errors.qualification}
            </div>
          ) : null}
        </div>
        <div className="w-[100%] mt-4">
          <label className="text-[19px] font-semibold" htmlFor="center_name">
            Nearby Location
          </label>
          <br />

          <select
            name="center_name"
            className="shadowBox w-[100%] border py-2 mt-1 rounded px-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.center_name}
          >
            <option value="">Please Select </option>
            {centreArray.map((values) => (
              <option value={values.ccode}>{values.name}</option>
            ))}
          </select>
          {formik.touched.center_name && formik.errors.center_name ? (
            <div className="text-red-500 text-sm">
              {formik.errors.center_name}
            </div>
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
