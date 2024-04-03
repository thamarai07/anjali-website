import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import { CourseContent } from "../../../utils/CourseContent";
import axios from "axios";

const CourseForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [responseMessage, setResponseMessage] = useState("");
  const [Name,setName] = useState<string>();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      qualification: "",
      center_name: "",
      course_name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]+$/, "Invalid phone number") // Only allow digits
        .min(10, "Must be at least 10 characters")
        .required("Mobile is required"),
      qualification: Yup.string().required("Qualification is required"),
      center_name: Yup.string().required("Location is required"),
      course_name: Yup.string().required("Course is required"),

    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setName(values.name)
      axios.post('https://anjalicomputereducation.com/api/?key=91d671f835b9d92970ba5460e8be0dc2d6c49356&req_data=enq', values)
        .then((response : any) => {
          if (response.status === 200) {
            setShowForm(false);
            setResponseMessage(response.data);
          } else if (response.status === 201) {
            setResponseMessage("Error: " + response.data.msg);
          }
          setSubmitting(false);
          resetForm();
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
    <div className="border  bg-white border-green-500 p-5 w-[100%] m-auto rounded-lg shadow-md shadow-green-500">
       {showForm ? (
        <>
         <p className="lg:text-2xl text-xl mb-4 font-semibold">Enquiry Now </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-[100%] mb-2">
          <label className="text-[16px] font-semibold">Course</label>
          <br />
          <select name="course_name"   onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.course_name} id="" className="shadowBox w-[100%] border py-1.5 mt-1 rounded px-2">
  <option value="">Please Select Course</option>
  <option value="others">Others</option>

  {
    CourseContent.map((values) => (
      <option value={values.courseId}>{values.courseTitle}</option>
    ))
  }
</select>
        </div>
        <div className="w-[100%]">
          <label className="text-[16px] font-semibold" htmlFor="name">
            Name
          </label>
          <br />
          <input
            type="text"
            name="name"
            className="shadowBox w-[100%] border py-1.5 mt-1 rounded px-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="w-[100%] mt-2">
          <label className="text-[16px] font-semibold" htmlFor="email">
            Email
          </label>
          <br />
          <input
            type="text"
            name="email"
            className="shadowBox w-[100%] border py-1.5 mt-1 rounded px-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="w-[100%] mt-2">
          <label className="text-[16px] font-semibold" htmlFor="mobile">
            Mobile
          </label>
          <br />
          <input
            type="text"
            name="mobile"
            className="shadowBox w-[100%] border py-1.5 mt-1 rounded px-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
          ) : null}
        </div>
        <div className="w-[100%] mt-2">
          <label className="text-[16px] font-semibold" htmlFor="qualification">
            Qualification
          </label>
          <br />
          <input
            type="text"
            name="qualification"
            className="shadowBox w-[100%] border py-1.5 mt-1 rounded px-2"
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
        <div className="w-[100%] mt-2">
          <label className="text-[16px] font-semibold" htmlFor="center_name">
            Nearby Location
          </label>
          <br />

          <select
            name="center_name"
            className="shadowBox w-[100%] border py-1.5 mt-1 rounded px-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.center_name}
          >
            <option value="">Please Select </option>
  <option value="others">Others</option>

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
        <div className="mt-2 flex justify-center">
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
        </>
       ) : <div>Hello <span className="font-semibold text-green-500"> {Name} </span>, be ready! We will contact you very shortly.
       </div> }
     
    </div>
  );
};

export default CourseForm;
