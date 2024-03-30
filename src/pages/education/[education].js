import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import Head from "next/head";
import { KeywordArray, CenterDetails } from "../../../utils/center";

export const getStaticPaths = async (context) => {
  try {
    const paths = CenterDetails.flatMap((valu) =>
      KeywordArray.flatMap((val) =>
        val.keyword.map((values) => ({
          params: {
            education: values.keyword1
              .replace(/###/g, valu.centerName)
              .replace(/\s+/g, "-"),
          },
        }))
      )
    );

    return {
      paths: paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const data = {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNzEwNzQxOTM5fQ.SbqXNVrtgr6LPR3bRJUYOgcFG83NgYxcJjepsqmg-Lc",
    source: "get_course_details",
    slug: params.education,
  };

  try {
    const response = await axios.post(
      "https://api-v1.cadd.ws/api/course_internship",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const coursedata = response.data;

    return {
      props: { coursedata: coursedata },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      // Return an object even in case of error
      props: { coursedata: null }, // Set coursedata to null or handle the error appropriately
    };
  }
};

function CenterName({ params }) {
  const [Title, setTitle] = useState();
  useEffect(() => {
    CenterDetails.flatMap((valu) =>
      KeywordArray.flatMap((val) =>
        val.keyword.map((values) =>
          setTitle(values.keyword1.replace(/###/g, valu.centerName))
        )
      )
    );
  }, []);

  console.log(Title);
  return (
    <>
      <Head>
        <title>{Title}</title>
      </Head>
      <div>
        <div>
          <h1 className="text-center font-semibold capitalize ">{Title}</h1>
        </div>
      </div>
    </>
  );
}

export default CenterName;
