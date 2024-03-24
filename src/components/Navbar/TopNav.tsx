import Link from "next/link";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

export default function TopNav() {
  const Tele = [
    {
      id: 1,
      tele: " 044-2226 6300 ",
    },
    {
      id: 2,
      tele: "99628 44944",
    },
    {
      id: 3,
      tele: "99943 31114",
    },
    {
      id: 4,
      tele: "99625 54550",
    },
    {
      id: 5,
      tele: " 99625 56559",
    },
  ];
  return (
    <>
      <div className="bg-[#004e29]  gap-8 justify-end items-center px-20 py-0.5 text-[14px] text-white leading-9 antialiased font-medium lg:flex hidden ">
        <FiPhone />
        {Tele.map((values) => (
          <>
            <a
              href={`tel:${values.tele}`}
              key={values.id}
              className="hover:bg-white text-white hover:text-black px-1 rounded-sm"
            >
              {values.tele}
            </a>
          </>
        ))}
        <CiMail />
        <a href="mailto:anjaliedu27@gmail.com">anjaliedu27@gmail.com</a>
      </div>
    </>
  );
}
