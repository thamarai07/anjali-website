import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CourseList } from "../../../utils/courses";
const MegaMenu = ({ handleShow }: any) => {
  const [Show, setShow] = useState(false);
  useEffect(() => {
    handleShow(Show);
  }, [Show]);
  return (
    <>
      <div className="lg:flex">
        {CourseList.map((values) => (
          <>
            <div className=" border rounded lg:m-2 lg:pl-0 pl-4 lg:w-[220px] lg:py-0 lg:mb-0 mb-6">
              <div className="text-black text-[16px] font-semibold  w-[110px] lg:p-2 lg:py-0 py-3">
                {values.stream}
              </div>
              <div className="lg:mb-0 mb-4">
                <div className="flex flex-wrap">
                  {values.course.map((v) => (
                    <Link
                      href={"/course/" + v.slug}
                      className="text-black hover:text-white w-[160px] lg:p-2 lg:py-0 py-2  lg:text-[13px] text-[12px]  bg-white hover:bg-green-500 "
                      onClick={() => handleShow(false)}
                    >
                      {v.course}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default MegaMenu;
