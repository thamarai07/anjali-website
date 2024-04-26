import React, { useEffect, useState } from "react";
import Head from "next/head";
import { KeywordArray, CenterDetails } from "../../../utils/center";
import CourseForm from "@/container/education/form";
import Image from "next/image";
import InfiniteLooper from "../../container/Infinity";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import Certificate from "@/container/Certificate";
import AnjaliStats from "@/container/AnjaliStats";
import Testimonial from "@/container/Testimonial";
import { useRouter } from "next/router";
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
  try {
    return {
      props: { coursedata: null },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { coursedata: null },
    };
  }
};

function CenterName({ params }) {
  const [MapedValues, SetMapedValues] = useState();

  const rou = useRouter();
  const [Title, setTitle] = useState();
  const [centerNamedynamic, setcenterNamedynamic] = useState();

  useEffect(() => {
    if (rou && rou.query) {
      const { education } = rou.query;
      CenterDetails.forEach((values) => {
        KeywordArray.forEach((value) => {
          value.keyword.forEach((val) => {
            const mappedValue = val.keyword1
              .replace(/###/g, values.centerName)
              .replace(/\s+/g, "-");
              console.log(mappedValue)
            if (mappedValue === education) {
              setcenterNamedynamic(values.centerName);
              SetMapedValues(mappedValue);
              const modifiedStr = mappedValue.replace(/-/g, " ");
              setTitle(modifiedStr);
            }
          });
        });
      });
    }
  }, [rou]);

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

 
  function capitalizefirstLetter(str){
    let st = str.split(" ");
    let capitalizedWords = st.map((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    });
    return capitalizedWords.join(" ");
  }



  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{Title && capitalizefirstLetter(Title)}</title>
        <meta
          name="description"
          content={`Discover excellence at Anjali Computer Education in ${centerNamedynamic}. Licensed by the Ministry of Corporate Affairs, Govt. of India, we offer premier training in computer software and soft skills. Whether you're a student, professional, or job seeker, our expert-led programs empower you to succeed. `}
        />
         <meta name="keywords" content={Title}/>
        <link
          rel="canonical"
          href={`https://anjalicomputereducation.com/education/${MapedValues}/`}
        />

      </Head>
      <div className="gradient_one">
        <div className="lg:max-w-7xl m-auto ">
          <div className="lg:px-16 py-2">
            <div className="lg:flex gap-24 justify-center items-center">
              <div className="lg:w-[65%] lg:px-0 px-4 m-auto">
                <Image
                  src={"/banneranjalicomputereducation.jpg"}
                  className="rounded-md lg:mb-10 mb-Sri Lakshmi Hayagrivas6 m-auto"
                  width={700}
                  height={200}
                  alt="anjalicomputereducation"
                />
                <div className=" bg-white lg:py-4 py-2 lg:rounded-lg rounded-md shadow-lg">
                  <h1 className=" font-extrabold capitalize lg:text-[32px] text-[22px] lg:p-0 p-2 flex justify-center items-center lg:w-[80%] w-auto m-auto text-slate-400 antialiased text-center ">
                    {Title}
                  </h1>
                </div>
                <h2 className="text-black lg:text-[26px] text-[18px] text-center mt-6 font-semibold antialiased">
                  A unit of Anjali education & Charitable trust
                </h2>
                <h3 className="text-center mt-4 lg:text-[20px] text-[16px] font-semibold text-slate-500 lg:w-[70%] m-auto antialiased">
                  Licenced from ministry of corporate affairs - Govt. of India
                </h3>
              </div>

              <div className="lg:w-[35%] lg:py-10 py-6 lg:px-0 px-4">
                <CourseForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:py-6 py-2 ">
        <div className="lg:max-w-7xl m-auto  ">
          <div className="lg:py-10 py-4">
            <div className="lg:flex gap-10">
              <div className="lg:w-[50%] lg:p-8 p-4 border bg-white rounded-lg">
                <p className="lg:text-[18px] text-[16px] leading-8 antialiased">
                  At Anjali Computer Education{" "}
                  <span className="capitalize">- {centerNamedynamic}</span>, we
                  specialize in delivering top-notch training in both computer
                  software and soft skills. Our programs cater to students,
                  working professionals, and individuals seeking employment
                  opportunities. With a team of highly skilled industry experts,
                  we ensure that our students receive the best guidance to
                  develop and enhance their skills. Whether it's mastering
                  software applications or refining essential soft skills, we
                  are committed to providing world-class education that empowers
                  individuals to succeed in today's competitive landscape. Join
                  us to unlock your full potential and thrive in the dynamic
                  world of technology and professional development.
                </p>

                <div className="mt-10">
                  <ol>
                    <li className="flex justify-start items-center gap-2 text-lg mb-4 p-2 border shadow-md ">
                      <VscDebugBreakpointLogUnverified size={20} /> World-Class
                      Industry Experts
                    </li>
                    <li className="flex justify-start items-center gap-2 text-lg mb-4 p-2 border shadow-md">
                      <VscDebugBreakpointLogUnverified size={20} /> Hands-On
                      Practical Experience
                    </li>
                    <li className="flex justify-start items-center gap-2 text-lg mb-4 p-2 border shadow-md">
                      <VscDebugBreakpointLogUnverified size={20} /> Online &amp;
                      Offline Classes
                    </li>
                    <li className="flex justify-start items-center gap-2 text-lg mb-4 p-2 border shadow-md">
                      <VscDebugBreakpointLogUnverified size={20} />
                      Flexible Timing
                    </li>
                    <li className="flex justify-start items-center gap-2 text-lg mb-4 p-2 border shadow-md">
                      <VscDebugBreakpointLogUnverified size={20} />
                      Easy Installment Plans
                    </li>
                    <li className="flex justify-start items-center gap-2 text-lg mb-4 p-2 border shadow-md">
                      <VscDebugBreakpointLogUnverified size={20} />
                      Part-Time Job Opportunities
                    </li>
                    <li className="flex justify-start items-center gap-2 text-lg mb-4 p-2 border shadow-md">
                      <VscDebugBreakpointLogUnverified size={20} />
                      High-Tech Computer Labs
                    </li>
                    <li className="flex justify-start items-center gap-2 text-lg mb-4 p-2 border shadow-md">
                      <VscDebugBreakpointLogUnverified size={20} />
                      Regular &amp; Weekend Classes
                    </li>
                    <li className="flex justify-start items-center gap-2 text-lg mb-4 p-2 border shadow-md">
                      <VscDebugBreakpointLogUnverified size={20} /> Special
                      Timing for Students &amp; Housewives
                    </li>
                    <li className="flex justify-start items-center gap-2 text-lg mb-4 p-2 border shadow-md">
                      <VscDebugBreakpointLogUnverified size={20} />
                      ISO Certified Courses
                    </li>
                  </ol>
                </div>
              </div>
              <div className="lg:w-[50%]">
                <div className="grid lg:grid-cols-2 gap-10 lg:px-0 px-4">
                  <Image
                    src={"/assets/img/1.jpg"}
                    width={800}
                    height={100}
                    alt="anjalicomputer images"
                    className="shadow-2xl rounded-xl"
                  />
                  <div>
                    <Image
                      src={"/assets/img/30.jpg"}
                      width={800}
                      height={100}
                      alt="anjalicomputer images"
                      className="shadow-2xl rounded-xl"
                    />
                    <Image
                      src={"/assets/img/18.jpg"}
                      width={800}
                      height={100}
                      alt="anjalicomputer images"
                      className="shadow-2xl rounded-xl lg:mt-6 mt-8"
                    />
                  </div>
                  <Image
                    src={"/assets/img/1.jpg"}
                    width={300}
                    height={100}
                    alt="anjalicomputer images"
                    className="shadow-2xl lg:w-auto w-full rounded-xl lg:-mt-16"
                  />
                  <Image
                    src={"/assets/img/24.jpg"}
                    width={300}
                    height={100}
                    alt="anjalicomputer images"
                    className="shadow-2xl rounded-xl m-auto "
                  />
                  <Image
                    src={"/assets/img/25.jpg"}
                    width={300}
                    height={100}
                    alt="anjalicomputer images"
                    className="shadow-2xl rounded-xl m-auto lg:-mt-[470px] "
                  />
                </div>
              </div>
            </div>
            <p className="gradient_one text-center md:text-[30px] text-[20px] font-semibold lg:mt-[80px] mt-20 mb-[60px] antialiased  py-4">
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
            <div>
              <Certificate />
            </div>
            <p className="text-center md:text-[40px] text-[30px] font-extrabold md:mt-20 mt-10 mb-[80px]"></p>
            <AnjaliStats />
            <Testimonial />
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 text-black  font-semibold  text-center py-5">
        <p className="false">
          © AnjaliComputerEducation - {centerNamedynamic} 2024, All rights
          reserved
        </p>
      </div>
    </>
  );
}

export default CenterName;
