import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
export function AddsAccordion() {
  const [OnHovered, setOnHovered] = React.useState(false);
  const [Id,setId] = useState<number>(0);


  const handleHover = (data : number) =>{
    setId(data)
    setOnHovered(true)
  }
console.log(Id)
console.log(OnHovered)
  const AddArray = [
    {
      id: 5,
      heading: "Head Office(Tambaram)",
      address:
        "10, Kaveri Complex, Ramasamy St., West Tambaram, Chennai - 600 045.",
      mobile: "044 2226 6300 / 99628 44944",
      email: "anjaliedutbm001@gmail.com",
      tele: "99628 44944"
    },
    {
      id: 2,
      heading: "Selaiyur",
      address:
        "16, Vallalar St., Ezhil Nagar Main Rd., Selaiyur, Chennai - 600 073. ",
      mobile: "044 3565 7202 / 99625 54550",
      email: "anjalislr03@gmail.com",
      tele: "99625 54550"
    },
    {
      id: 3,
      heading: "Guduvanchery",
      address: " 197, GST Road, Guduvanchery, Chennai - 603 202.",
      mobile: " 044 2746 0006 / 99625 56559",
      email: "anjaliedugud04@gmail.com",
      tele : "99625 56559"
    },
    {
      id: 4,
      heading: "Chengalpat",
      address: " 17, Anna Salai, Main Road, Chengalpattu, Tamil Nadu 603 001",
      mobile: "  044 2742 2005 / 99943 31114",
      email: "anjali4ucgl@gmail.com",
      tele : "99943 31114"
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 gap-10 lg:mx-10 justify-center">
   
          {AddArray.map((values) => (
            <div className="lg:mx-0 mx-4 p-4 rounded-lg shadow-green-500 border border-green-300 shadow-md" onMouseEnter={()=>handleHover(values.id)} onMouseLeave={()=>setOnHovered(false)}> 
                <p className="text-center font-semibold text-[18px] mb-4">{values.heading}</p>
                <hr />
                <p className="text-center text-[13px] leading-6 lg:mt-6 mt-2">{values.address}</p>
                <div className="mt-4 flex justify-center gap-2 items-center">
                    <MdOutlinePhone size={20}/>
                    <a href={`tel:+${values.tele}`} className="text-black hover:text-green-500 font-semibold">{values.tele}</a>
                </div>
                <div className="mt-2 flex justify-center gap-2 items-center text-center">
                    <CiMail />
                    <a href={`mailto:${values.email}`} className="text-black hover:text-green-500 font-semibold">{values.email}</a>
                </div>
                <div className={` ${ values.id == Id && "loader-line "} mt-6 p-1`}></div>
            </div>
          ))}
    
      </div>
    </>
  );
}
