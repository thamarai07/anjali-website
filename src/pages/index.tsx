import Head from "next/head";
import MainLayout from "@/components/Layuout/MainLayout";
import HomeSlider from "@/container/HomeSlider";
import Unic from "@/container/Unic";
import AnjaliStats from "@/container/AnjaliStats";
import Courses from "@/container/Courses";
import Testimonial from "@/container/Testimonial";
import Certificate from "@/container/Certificate";
import Image from "next/image";
import InfiniteLooper from "@/container/Infinity";
// import db from "../config/db"
import { MasonryGridGallery } from "@/components/gallery";

export default function Home() {
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

  return (
    <>
      <Head>
        <title>Anjali Computer Education | ISO Certified</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Begin your career journey with Anjali Computer Education, offering world-class training and advanced courses to help you excel in the ever-evolving tech industry."
        />
        <meta
          name="keywords"
          content="Anjali Computer Education, ISO Certified courses, programming course, coding classes,web development,fullstack web development,soft skills, communication training,Tally courses, Tally ERP course, accounting course, hardware repair courses, multimedia design course, graphic design course, video editing course, animation course, networking course, cybersecurity course"
        />
        <link rel="canonical" href="https://anjalicomputereducation.com/" />
      </Head>
      <MainLayout>
        <div className="lg:max-w-[1200px] m-auto px-10 mt-10">
          <h1 className="text-center md:text-[40px] text-[25px] leading-relaxed  font-bold lg:mb-[10px] lg:mt-[40px] antialiased  mb-4">
            Anjali Computer Education can help you have a successful career
          </h1>
          <p className="text-center md:text-[35px] text-[25px] leading-relaxed  font-bold lg:mb-[100px] lg:mt-[40px] antialiased ">
            Our Advanced Courses Can Help You Advance{" "}
            <span className="text-red-500 "> Your Career </span>
          </p>
          <MasonryGridGallery/>
          <HomeSlider />
        
        </div>
        <p className="gradient_one text-center md:text-[45px] text-[30px] font-semibold  lg:mt-[120px] mt-20 mb-[60px] antialiased  ">
          Get chances to work at top companies
        </p>
        <div className="lg:max-w-[1200px] m-auto px-10 mt-10">
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
          <Courses />
          <Certificate />
          {/* <Content/> */}
          <p className="text-center md:text-[40px] text-[30px] font-extrabold md:mt-20 mt-10 mb-[80px]"></p>
          <AnjaliStats />
          <p className="text-center md:text-[45px] text-[30px] font-semibold  lg:mt-[120px] mt-20 mb-[60px] antialiased">
            Features Of Anjali Computer
          </p>
          <Unic />
          <Testimonial />
        </div>
      </MainLayout>
    </>
  );
}
