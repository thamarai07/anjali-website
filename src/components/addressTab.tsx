import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function AddsAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  const AddArray = [
    {
      id: 5,
      heading: "Head Office",
      address:
        "10, Kaveri Complex, Ramasamy St., West Tambaram, Chennai - 600 045.",
      mobile: "044 2226 6300 / 99628 44944",
      email: "anjaliedutbm001@gmail.com",
    },
    {
      id: 2,
      heading: "Selaiyur",
      address:
        "16, Vallalar St., Ezhil Nagar Main Rd., Selaiyur, Chennai - 600 073. ",
      mobile: "044 3565 7202 / 99625 54550",
      email: "anjalislr03@gmail.com",
    },
    {
      id: 3,
      heading: "Guduvanchery",
      address: " 197, GST Road, Guduvanchery, Chennai - 603 202.",
      mobile: " 044 2746 0006 / 99625 56559",
      email: "anjaliedugud04@gmail.com",
    },
    {
      id: 4,
      heading: "Chengalpat",
      address: " 17, Anna Salai, Main Road, Chengalpattu, Tamil Nadu 603 001",
      mobile: "  044 2742 2005 / 99943 31114",
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
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(values.id)}
                      className="text-[18px] font-semibold  flex justify-center text-black hover:text-black  animate-pulse antialiased"
                    >
                      {values.heading}
                    </AccordionHeader>
                    <AccordionBody  class="text-black hover:text-black px-4 py-4 text-[16px] lg:mx-0 mx-10" >
                      <p>
                        {" "}
                        <span className="font-semibold text-black hover:text-black">Address : </span>{" "}
                        {values.address}
                      </p>
                      <p>
                        <span className="font-semibold text-black hover:text-black">Contact Number : </span>
                        {values.mobile}
                      </p>
                      <p>
                        <span className="font-semibold text-black hover:text-black">E-Mail: </span>
                        {values.email}
                      </p>
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
                  <Accordion open={open === values.id} className="">
                    <AccordionHeader
                      onClick={() => handleOpen(values.id)}
                      className="text-[18px] font-semibold flex justify-center text-black hover:text-black  animate-pulse antialiased"
                    >
                      {values.heading}
                    </AccordionHeader>
                    <AccordionBody  class="text-black hover:text-black px-4 py-4  lg:mx-0 mx-10" >
                      <p>
                        {" "}
                        <span className="font-semibold text-black hover:text-black">Address : </span>{" "}
                        {values.address}
                      </p>
                      <p>
                        <span className="font-semibold text-black hover:text-black">Contact Number : </span>
                        {values.mobile}
                      </p>
                      <p>
                        <span className="font-semibold text-black hover:text-black">E-Mail: </span>
                        {values.email}
                      </p>
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
                  <Accordion open={open === values.id} className="">
                    <AccordionHeader
                      onClick={() => handleOpen(values.id)}
                      className="text-[18px] font-semibold flex justify-center text-black hover:text-black  animate-pulse antialiased"
                    >
                      {values.heading}
                    </AccordionHeader>
                    <AccordionBody  class="text-black hover:text-black px-4 py-4  lg:mx-0 mx-10" >
                      <p>
                        {" "}
                        <span className="font-semibold">Address : </span>{" "}
                        {values.address}
                      </p>
                      <p>
                        <span>Contact Number : </span>
                        {values.mobile}
                      </p>
                      <p>
                        <span className="font-semibold text-black hover:text-black">E-Mail: </span>
                        {values.email}
                      </p>
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
                  <Accordion open={open === values.id} className="">
                    <AccordionHeader
                      onClick={() => handleOpen(values.id)}
                      className="text-[18px] font-semibold flex justify-center text-black hover:text-black  animate-pulse antialiased"
                    >
                      {values.heading}
                    </AccordionHeader>
                    <AccordionBody class="text-black hover:text-black px-4 py-4  lg:mx-0 mx-10" >
                      <p>
                        {" "}
                        <span className="font-semibold text-black hover:text-black">Address : </span>{" "}
                        {values.address}
                      </p>
                      <p>
                        <span className="font-semibold text-black hover:text-black">Contact Number : </span>
                        {values.mobile}
                      </p>
                      <p>
                        <span className="font-semibold text-black hover:text-black">E-Mail: </span>
                        {values.email}
                      </p>
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
