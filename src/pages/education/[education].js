import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import Head from "next/head";
import { KeywordArray, CenterDetails } from "../../../utils/center";
import CourseForm from "@/container/education/form";
import Image from "next/image";
import InfiniteLooper from "../../container/Infinity"

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
      props: { coursedata: null }, 
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

  const CompanyLogo = [
    {
      id: 1,
      campany: "/company/7611770.png",
      comapanyName: "google",
    },
    {
      id: 2,
      campany: "/company/CGI_Inc.-Logo.wine.png",
      comapanyName: "CGI_Inc",
    },
    {
      id: 3,
      campany: "/company/cisco_logo-1000px.png",
      comapanyName: "cisco_logo",
    },
    {
      id: 4,
      campany: "/company/Cognizant_logo_2022.svg.png",
      comapanyName: "Cognizant_logo",
    },
    {
      id: 5,
      campany: "/company/Dell_logo.png",
      comapanyName: "Dell_logo",
    },
    {
      id: 6,
      campany: "/company/hp-logo.com.png",
      comapanyName: "hp-logo",
    },
    {
      id: 7,
      campany: "/company/IBM_logo.svg.png",
      comapanyName: "IBM_logo",
    },
    {
      id: 8,
      campany: "/company/Infosys_logo.svg.png",
      comapanyName: "Infosys_logo",
    },
    {
      id: 9,
      campany: "/company/Intel-logo-2022.png",
      comapanyName: "Intel",
    },
    {
      id: 10,
      campany:
        "/company/png-transparent-microsoft-logo-microsoft-thumbnail.png",
      comapanyName: "microsoft",
    },
    {
      id: 11,
      campany: "/company/sutherland-global-services.png",
      comapanyName: "sutherland",
    },
    {
      id: 12,
      campany: "/company/Tata_Consultancy_Services_Logo.svg.png",
      comapanyName: "Tata_Consultancy_Services_Logo",
    },
  ];


  console.log(Title);
  return (
    <>
      <Head>
        <title>{Title}</title>
      </Head>
      <div className="gradient_one">
      <div className="max-w-7xl m-auto ">
      <div className=" px-16 py-2">
        <div className="lg:flex gap-24 justify-center items-center">
        <div className="w-[65%] m-auto">
        <div className=" bg-white py-4 rounded-lg shadow-lg">
            <h1 className=" font-extrabold capitalize text-[36px] flex justify-center items-center w-[60%] m-auto text-slate=400 antialiased">{Title}</h1>
          </div>
        <h2 className="text-black text-[26px] text-center mt-6 font-semibold antialiased">A unit of Anjali education & Charitable trust</h2>
        <h3 className="text-center mt-4 text-[20px] font-semibold text-slate-500 w-[70%] m-auto antialiased">Licenced from ministry of corporate affairs - Govt. of India</h3>
        </div>
         
          <div className="w-[35%]"><CourseForm/></div>
        </div>
      </div>
     
      </div>
      </div>
      
      <div className=" py-6 ">
      <div className="lg:max-w-7xl m-auto  ">
      <div className="py-10">
      <div className="lg:flex gap-10">
      <div className="lg:w-[50%] p-8 border bg-white rounded-lg">
        <p className="text-[18px] leading-8 antialiased">At Anjali Computer Education, we specialize in delivering top-notch training in both computer software and soft skills. Our programs cater to students, working professionals, and individuals seeking employment opportunities. With a team of highly skilled industry experts, we ensure that our students receive the best guidance to develop and enhance their skills. Whether it's mastering software applications or refining essential soft skills, we are committed to providing world-class education that empowers individuals to succeed in today's competitive landscape. Join us to unlock your full potential and thrive in the dynamic world of technology and professional development.</p>

      <div className="mt-10">
        <ol>
        <li>World-Class Industry Experts:</li>
        <li>Hands-On Practical Experience:</li>
        <li>Online &amp; Offline Classes:</li>
        <li>Flexible Timing:</li>
        <li>Easy Installment Plans:</li>
        <li>Part-Time Job Opportunities:</li>
        <li>High-Tech Computer Labs:</li>
        <li>Regular &amp; Weekend Classes:</li>
        <li>Special Timing for Students &amp; Housewives:</li>
        <li>ISO Certified Courses:</li>
        </ol>
      </div>

        <p className="gradient_one text-center md:text-[30px] text-[20px] font-semibold lg:mt-[80px] mt-20 mb-[60px] antialiased  ">
          Get chances to work at top companies
        </p>

        <InfiniteLooper speed={400} direction="left">
            <div className="flex gap-24 bg-gray-100 mb-5">
              {CompanyLogo.map((values) => (
                <Image
                  alt={values.comapanyName}
                  src={values.campany}
                  style={{
                    objectFit: "contain",
                  }}
                  width={140}
                  className="p-4"
                  height={40}
                />
              ))}
            </div>
          </InfiniteLooper>
         
          </div>
      <div className="lg:w-[50%]">
          <div className="grid lg:grid-cols-2 gap-10">
            
                  <Image src={"/assets/img/1.jpg"} width={800} height={100} alt="anjalicomputer images" className="shadow-2xl rounded-xl"/>
                  <div>
                  <Image src={"/assets/img/30.jpg"} width={800} height={100} alt="anjalicomputer images" className="shadow-2xl rounded-xl"/>
                  <Image src={"/assets/img/18.jpg"} width={800} height={100} alt="anjalicomputer images" className="shadow-2xl rounded-xl mt-6"/>
                  </div>
                  <Image src={"/assets/img/1.jpg"} width={300} height={100} alt="anjalicomputer images" className="shadow-2xl rounded-xl -mt-16"/>
                  <Image src={"/assets/img/24.jpg"} width={300} height={100} alt="anjalicomputer images" className="shadow-2xl rounded-xl m-auto "/>
                  <Image src={"/assets/img/25.jpg"} width={300} height={100} alt="anjalicomputer images" className="shadow-2xl rounded-xl -mt-[470px] "/>

          </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default CenterName;
