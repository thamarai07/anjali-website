import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
export function AddsAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  const AddArray = [
    {
      id: 5,
      heading: "Head Office (Tambaram)",
      address:
        "10, Kaveri Complex, Ramasamy St., West Tambaram, Chennai - 600 045.",
      mobile: "99628 44944",
      email: "anjaliedutbm001@gmail.com",
    },
    {
      id: 2,
      heading: "Selaiyur",
      address:
        "16, Vallalar St., Ezhil Nagar Main Rd., Selaiyur, Chennai - 600 073. ",
      mobile: "99625 54550",
      email: "anjalislr03@gmail.com",
    },
    {
      id: 3,
      heading: "Guduvanchery",
      address: " 197, GST Road, Guduvanchery, Chennai - 603 202.",
      mobile: "99625 56559",
      email: "anjaliedugud04@gmail.com",
    },
    {
      id: 4,
      heading: "Chengalpat",
      address: " 17, Anna Salai, Main Road, Chengalpattu, Tamil Nadu 603 001",
      mobile: "99943 31114",
      email: "anjali4ucgl@gmail.com",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 lg:mx-10">
        <div>
          {AddArray.map(
            (values) =>
              values.id == 5 && (
                <div className="">
                  <Accordion
                    open={open === values.id}
                    className=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(values.id)}
                      className="text-[18px] font-semibold  flex justify-center text-black hover:text-black  animate-pulse antialiased"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {values.heading}
                    </AccordionHeader>
                    <AccordionBody class="text-black hover:text-black px-4 py-4 text-[16px] lg:mx-0 mx-10">
                      <p>
                        {" "}
                        <span className="font-semibold text-black hover:text-black">
                          Address :{" "}
                        </span>{" "}
                        {values.address}
                      </p>
                      <div className="flex gap-4">
                      <a
                        href={`tel:+ ${values.mobile}`}
                        className="flex bg-green-600 m-auto items-center gap-2 w-[120px] px-1 py-1 justify-center rounded-lg text-white mt-2 "
                      >
                        <IoCallOutline /> Call now
                      </a>
                      <a
                        href={`tel:+ ${values.email}`}
                        className="flex bg-green-600 m-auto items-center gap-2 w-[120px] px-1 py-1 justify-center rounded-lg text-white mt-2 "
                      >
                        <CiMail />
                        Mail
                      </a>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              )
          )}
        </div>
        <div>
          {AddArray.map(
            (values) =>
              values.id == 2 && (
                <div className="">
                  <Accordion
                    open={open === values.id}
                    className=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(values.id)}
                      className="text-[18px] font-semibold flex justify-center text-black hover:text-black  animate-pulse antialiased"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {values.heading}
                    </AccordionHeader>
                    <AccordionBody class="text-black hover:text-black px-4 py-4  lg:mx-0 mx-10">
                      <p>
                        {" "}
                        <span className="font-semibold text-black hover:text-black">
                          Address :{" "}
                        </span>{" "}
                        {values.address}
                      </p>
                      <div className="flex gap-4">
                      <a
                        href={`tel:+ ${values.mobile}`}
                        className="flex bg-green-600 m-auto items-center gap-2 w-[120px] px-1 py-1 justify-center rounded-lg text-white mt-2 "
                      >
                        <IoCallOutline /> Call now
                      </a>
                      <a
                        href={`tel:+ ${values.email}`}
                        className="flex bg-green-600 m-auto items-center gap-2 w-[120px] px-1 py-1 justify-center rounded-lg text-white mt-2 "
                      >
                        <CiMail />
                        Mail
                      </a>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              )
          )}
        </div>
        <div>
          {AddArray.map(
            (values) =>
              values.id == 3 && (
                <div className="">
                  <Accordion
                    open={open === values.id}
                    className=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(values.id)}
                      className="text-[18px] font-semibold flex justify-center text-black hover:text-black  animate-pulse antialiased"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {values.heading}
                    </AccordionHeader>
                    <AccordionBody class="text-black hover:text-black px-4 py-4  lg:mx-0 mx-10">
                      <p>
                        {" "}
                        <span className="font-semibold">Address : </span>{" "}
                        {values.address}
                      </p>
                      <div className="flex gap-4">
                      <a
                        href={`tel:+ ${values.mobile}`}
                        className="flex bg-green-600 m-auto items-center gap-2 w-[120px] px-1 py-1 justify-center rounded-lg text-white mt-2 "
                      >
                        <IoCallOutline /> Call now
                      </a>
                      <a
                        href={`tel:+ ${values.email}`}
                        className="flex bg-green-600 m-auto items-center gap-2 w-[120px] px-1 py-1 justify-center rounded-lg text-white mt-2 "
                      >
                        <CiMail />
                        Mail
                      </a>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              )
          )}
        </div>
        <div>
          {AddArray.map(
            (values) =>
              values.id == 4 && (
                <div className="">
                  <Accordion
                    open={open === values.id}
                    className=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <AccordionHeader
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      onClick={() => handleOpen(values.id)}
                      className="text-[18px] font-semibold flex justify-center text-black hover:text-black  animate-pulse antialiased"
                    >
                      {values.heading}
                    </AccordionHeader>
                    <AccordionBody class="text-black hover:text-black px-4 py-4  lg:mx-0 mx-10">
                      <p>
                        {" "}
                        <span className="font-semibold text-black hover:text-black">
                          Address :{" "}
                        </span>{" "}
                        {values.address}
                      </p>
                      <div className="flex gap-4">
                      <a
                        href={`tel:+ ${values.mobile}`}
                        className="flex bg-green-600 m-auto items-center gap-2 w-[120px] px-1 py-1 justify-center rounded-lg text-white mt-2 "
                      >
                        <IoCallOutline /> Call now
                      </a>
                      <a
                        href={`tel:+ ${values.email}`}
                        className="flex bg-green-600 m-auto items-center gap-2 w-[120px] px-1 py-1 justify-center rounded-lg text-white mt-2 "
                      >
                        <CiMail />
                        Mail
                      </a>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}
