import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  Bars2Icon,
  HomeIcon,
  PhotoIcon,
  UserGroupIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
export const navListMenuItems = [
  {
    title: "SOFTWARE",
    description: [
      {
        id: 1,
        name: "C - LANGUAGE	",
        url: "/c_programming/",
      },
      {
        id: 2,
        name: "C++ WITH OOPS",
        url: "/cpp_oop/",
      },
      {
        id: 3,
        name: "JAVA TECHNOLOGY",
        url: "/java_programming/",
      },
      {
        id: 4,
        name: "PYTHON WITH DJANGO",
        url: "/python_with_django/",
      },
      {
        id: 5,
        name: "DOT NET TECHNOLOGY",
        url: "/dot_net_technology/",
      },
      {
        id: 6,
        name: "ANGULAR JS",
        url: "/angularjs_web_dev/",
      },
    ],
  },
  {
    title: "MS - OFFICE",
    description: [
      {
        id: 1,
        name: "MS - WINDOWS",
        url: "/mswindows/",
      },
      {
        id: 2,
        name: "MS - WORD",
        url: "/msword/",
      },
      {
        id: 3,
        name: "MS - EXCEL",
        url: "/msexcel/",
      },
      {
        id: 4,
        name: "ADVANCE EXCEL",
        url: "/advancedexcel/",
      },
      {
        id: 2,
        name: "MS - POWER POINT",
        url: "/mspowerpoint/",
      },
      {
        id: 3,
        name: "MS - ACCESS",
        url: "/msaccess/",
      },
    ],
  },
  {
    title: "TALLY",
    description: [
      {
        id: 1,
        name: "TALLY ERP9",
        url: "/tallyerp9/",
      },
      {
        id: 2,
        name: "TAXATION & GST CONCEPTS",
        url: "/taxation_gst_concepts/",
      },
      {
        id: 3,
        name: "TALLY PRIME",
        url: "/tally_prime/",
      },
      {
        id: 4,
        name: "CLOUD ACCOUNTING",
        url: "/cloud_accounting/",
      },
    ],
  },
  {
    title: "HARDWARE",
    description: [
      {
        id: 1,

        name: "BASIC & DIGITAL ELECTRONICS",
        url: "/basic_digital_electronics/",
      },
      {
        id: 2,

        name: "PC ARCHITECTURE",
        url: "/pc_architecture/",
      },
      {
        id: 3,

        name: "PC ASSEMBLING	",
        url: "/pc_assembling/",
      },

      {
        id: 5,

        name: "SOFTWARE INSTALLATION",
        url: "/software_installation/",
      },
      {
        id: 6,

        name: "NETWORKING ESSENTIALS",
        url: "/networking_essentials/",
      },
      {
        id: 7,

        name: "WINDOWS SERVER	",
        url: "/windows_server/",
      },
    ],
  },
  {
    title: "MULTIMEDIA",

    description: [
      {
        id: 1,

        name: "GRAPHIC DESIGNER",
        url: "/graphic_design_mastery/",
      },
      {
        id: 2,

        name: "ADOBE INDESIGN",
        url: "/adobe_indesign/",
      },
      {
        id: 3,

        name: "ADOBE PHOTOSHOP",
        url: "/adobe_photoshop/",
      },
      {
        id: 4,

        name: "ADOBE ILLUSTRATOR",
        url: "/adobe_illustrator/",
      },
      {
        id: 5,

        name: "WEB DESIGNING",
        url: "/web_designing/",
      },
      {
        id: 6,
        stream: 5,
        name: "ADOBE DREAMWEAVER",
        url: "/adobe_dreamweaver/",
      },
      {
        id: 7,
        stream: 5,
        name: "ABODE ANIMATE",
        url: "/adobe_animate/",
      },
      {
        id: 8,
        stream: 5,
        name: "ADOBE AUDITION/VFX	",
        url: "/adobe_audition_vfx/",
      },
    ],
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <MenuItem className="flex flex-col bg-white">
      {/* <Typography variant="h6" color="blue-gray" className="mb-1 font-bold text-green-500">
        {title}
      </Typography> */}
      <Typography  className="font-medium text-[12px] grid " >
        {description.map(({ name, id, url }) => (
          <Link key={id} href={"/course" + url} className="py-3 hover:bg-[#041E42] text-black hover:text-white p-1 rounded">
            {name}
          </Link>
        ))}
      </Typography>
    </MenuItem>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-[18px] font-medium text-white lg:flex ">
              <Square3Stack3DIcon className="h-[20px] w-[20px] " />
              Courses
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden grid-cols-7 gap-3 overflow-visible lg:flex mx-10">
          <ul className="flex justify-center gap-2 mx-10">{renderItems}</ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]  font-medium" />{" "}
        Courses{" "}
      </MenuItem>
      <ul className="lg:ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Home",
    icon: HomeIcon,
    href : "/"
  },
  {
    label: "Gallery",
    icon: PhotoIcon,
    href : "/gallery/"
  },
  {
    label: "About Us",
    icon: UserGroupIcon,
    href : "/aboutus/"
  },
  {
    label: "Contact Us",
    icon: PhoneIcon,
    href : "/Contactus/"
  },
];

function NavList() {
  return (
    <ul className=" flex flex-col lg:gap-8 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-white">
      <NavListMenu />
      {navListItems.map(({ label, icon ,href}, key) => (
        <Typography
          key={label}
          as="a"
          href={href}
          className="font-medium text-white text-[18px]"
        >
          <MenuItem className="flex items-center gap-2 text-white">
            {React.createElement(icon, {
              className: "h-[18px] w-[18px]",
            })}{" "}
            <span className="text-white"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

const NavLink = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  const {query} = useRouter()
  

  React.useEffect(()=>{
    if(query.course){
      setIsNavOpen(false)
    }
  },[query.course])
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  // block w-full max-w-screen-2xl rounded-xl  shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 text-white lg:p-4 border-none bg-[#002b17]

  return (
    <Navbar className=" lg:p-4 lg:py-4 px-1 lg:px-8 py-4 border-none bg-[#002b17]">
      <div className="relative mx-auto flex items-center justify-end text-white">
        <div className="hidden lg:block text-white">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll ">
        <NavList />
      </MobileNav>
    </Navbar>
  );
};
export default NavLink;
