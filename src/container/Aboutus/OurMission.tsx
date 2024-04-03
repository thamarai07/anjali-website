import Image from "next/image";
import type { FC } from "react";

interface OurMissionProps {}

const OurMission: FC<OurMissionProps> = ({}) => {
  return (
    <>
      <div className="lg:flex gap-24 items-center">
        <div className="lg:w-[100%] m-auto">
          <div className="flex items-center px-6 py-4 shadow-lg border mt-16 rounded-lg">
            <div>
              <h2 className="md:mt-2 mt-5  text-[26px] font-semibold text-green-500">
                Our Mission
              </h2>
              At <span className="font-bold">Anjali Computer Education</span>,
              our mission is to elevate individuals into well-equipped, dynamic
              personalities through the delivery of{" "}
              <span className="text-red-500 font-bold"> world-class </span>
              education and training. We are dedicated to providing a
              transformative educational experience that not only imparts
              knowledge but also fosters the development of essential life
              skills. Our commitment extends beyond traditional teaching
              methods;
              <br /> <br /> we believe in cultivating an environment that
              stimulates intellectual curiosity and creativity. To achieve this,
              we have assembled a team of{" "}
              <span className="text-orange-500 font-bold">
                {" "}
                high-caliber professionals and trainers{" "}
              </span>{" "}
              who are not just experts in their fields but are also passionate
              about nurturing talent.
            </div>
            <Image
              src={"/assets/anjali/aboutus/side.avif"}
              width={300}
              height={300}
              alt="sidebanner"
              className="lg:block hidden "
            />
          </div>
          <div className=" px-6 py-4 shadow-lg border mt-16 rounded-lg">
            <h2 className="mt-5  text-[26px] font-semibold text-blue-500">
              {" "}
              World-Class Education:
            </h2>
            We strive to offer a world-class education that goes beyond
            textbooks and exams. Our curriculum is designed to be comprehensive,
            incorporating the latest advancements in various{" "}
            <span className="text-emerald-500 font-bold">
              {" "}
              disciplines.
            </span>{" "}
            <br />
            <br /> Our courses are crafted to empower individuals with the
            knowledge and skills necessary to excel in a rapidly evolving global
            landscape.
            <br /> <br />
            <Image
              src={"/assets/anjali/aboutus/side.avif"}
              width={400}
              height={300}
              alt="sidebanner"
              className="lg:hidden block mt-5 mb-5"
            />
          </div>
          <div className="flex items-center px-6 py-4 shadow-lg border mt-16 rounded-lg">
            <div className="w-[70%]">
              <h2 className="mt-5  text-[26px] font-semibold text-red-500">
                {" "}
                Highly Professional Trainers:{" "}
              </h2>
              At the heart of our mission are our{" "}
              <span className="text-teal-500 font-bold">
                {" "}
                highly professional trainers.
              </span>{" "}
              They are not just educators; <br />
              <br /> they are mentors who inspire and guide individuals to reach
              their full potential. Our trainers bring a wealth of industry
              experience, ensuring that our students gain{" "}
              <span className="text-green-500 font-bold"> practical </span>{" "}
              insights into the real-world applications of their learning.
            </div>
            <div>
              <Image
                src={"/assets/anjali/aboutus/side3.jpg"}
                width={400}
                height={300}
                alt="sidebanner"
                className=" lg:block hidden "
              />
            </div>
          </div>
          <br />
          <br />
          <div className=" px-6 py-4 shadow-lg border mt-0 rounded-lg">
            <h2 className="mt-5  text-[26px] font-semibold text-orange-500">
              {" "}
              Creating a Platform for Maximum Exposure:{" "}
            </h2>
            In today's fast-paced world, staying updated is crucial. We provide
            a platform that offers maximum exposure to the latest trends,
            technologies, and developments in{" "}
            <span className="text-fuchsia-500 font-bold">
              various industries.
            </span>{" "}
            <br />
            <br />
            Through workshops, seminars, and interactive sessions, we ensure
            that our learners are well-informed and ready to adapt to the
            ever-changing demands of the professional landscape. <br />
            <br />
            <Image
              src={"/assets/anjali/aboutus/side3.jpg"}
              width={400}
              height={300}
              alt="sidebanner"
              className="lg:hidden block   mt-5 mb-5"
            />
          </div>
          <div className="flex items-center px-6 py-4 shadow-lg border mt-16 rounded-lg">
            <div className="w-[70%]">
              <h2 className="mt-5 text-[26px] font-semibold text-purple-500">
                {" "}
                Resourceful Learning Atmosphere:{" "}
              </h2>
              Learning is most effective when it occurs in an{" "}
              <span className="text-red-500 font-bold">environment </span>that
              is conducive to growth. Our classrooms are more than just spaces
              for lectures they are vibrant hubs of collaboration and
              innovation. <br />
              <br /> We foster a resourceful atmosphere that encourages students
              to explore, question, and engage actively in their educational
              journey.
            </div>
            <div>
              <Image
                src={"/assets/anjali/aboutus/side2.jpg"}
                width={400}
                height={300}
                alt="sidebanner"
                className="lg:block hidden "
              />
            </div>
            <br />
            <br />
          </div>
          <div className="px-6 py-4 shadow-lg border  rounded-lg mt-14">
            <h2 className="mt-5 text-[26px] font-semibold text-yellow-500">
              {" "}
              Job-Oriented Skills Development:{" "}
            </h2>
            Our focus is not just on{" "}
            <span className="text-blue-500 font-bold">
              {" "}
              academic knowledge{" "}
            </span>{" "}
            but also on developing job-oriented skills. We understand the
            importance of practical, hands-on experience in preparing
            individuals for{" "}
            <span className="text-green-500 font-bold">
              {" "}
              successful careers.
            </span>{" "}
            <br />
            <br /> Through specialized training modules, internships, and
            industry partnerships, we ensure that our graduates are equipped
            with the skills that employers seek. <br />
            <br />
            <Image
              src={"/assets/anjali/aboutus/side2.jpg"}
              width={400}
              height={300}
              alt="sidebanner"
              className="lg:hidden block mt-5 mb-5"
            />
            <h2 className="mt-5 text-[26px] font-semibold text-[#2e5090]">
              Guiding You to Achieve Your Targets:{" "}
            </h2>
            Every individual is unique, and so are their goals. We take pride in
            providing personalized guidance to each student, helping them
            navigate their educational journey and achieve their specific{" "}
            <span className="text-orange-500 font-bold"> targets.</span> <br />
            <br /> Our support extends beyond the classroom, fostering a
            community where aspirations are nurtured and dreams are realized.
            <br />
            <br />
            Join us at{" "}
            <span className="font-bold">Anjali Computer Education </span> and
            embark on a transformative educational experience that goes beyond
            boundaries, unlocking your potential and preparing you for a
            successful future."
          </div>
        </div>
        {/* <div>
         
          <Image
            src={"/assets/anjali/aboutus/side3.jpg"}
            width={400}
            height={300}
            alt="sidebanner"
            className="mt-24 lg:block hidden "
          />
          <Image
            src={"/assets/anjali/aboutus/side2.jpg"}
            width={400}
            height={300}
            alt="sidebanner"
            className="lg:block hidden mt-24"
          />
        </div> */}
      </div>
    </>
  );
};
export default OurMission;
