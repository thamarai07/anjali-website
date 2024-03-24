import { Breadcrumbs } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

interface  HeadType { 
    TypeofHead: string; 
} 
export function BreadcrumbsMain({ TypeofHead } : HeadType) {
  const Router = useRouter();
  const [BreadCum, setBreadCum] = useState("/");
  const [SlaceRemovedName, setSlaceRemovedName] = useState<string>();

  useEffect(() => {
    setBreadCum(Router.asPath);
  }, [Router.asPath]);



  function RemoveSlace(data: any) {
    let firstSlashIndex = data.indexOf("/");
    let lastSlashIndex = data.lastIndexOf("/");

    if (firstSlashIndex !== -1 && lastSlashIndex !== -1) {
      let modifiedData =
        data.substring(0, firstSlashIndex) +
        "" +
        data.substring(firstSlashIndex + 1, lastSlashIndex) +
        " " +
        data.substring(lastSlashIndex + 1);

      if (modifiedData.includes("_")) {
        let Dat = modifiedData.replace(/_/g, " - ");
        return capitalizeEachWord(Dat);
      }

      return capitalizeEachWord(modifiedData);
    }
    return capitalizeEachWord(data);
  }
  function capitalizeEachWord(str: string) {
    if (str.includes("/")) {
      return str.replace("/", " / ");
    }
    let words = str.split(" ");
    let capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  }

  useEffect(() => {
    const TT = RemoveSlace(BreadCum);
    setSlaceRemovedName(TT);
    
  }, [BreadCum]);


  return (
    <Breadcrumbs
      className={`${
        Router.route == "/"
          ? "hidden"
          : ` flex  w-screen rounded-none lg:px-28 px-10 bg-white ${TypeofHead == "head" ? "lg:mt-10 lg:mb-10 mt-6 mb-6" : "lg:mt-10 mt-6" } `
      }`}
      fullWidth={true}
    >
      <Link href={"/"} className="text-[18px]  hover:text-blue-400">
        Home
      </Link>
      <Link
        href={`${Router.asPath}/`}
        className="text-[18px]  hover:text-blue-400 capitalize "
      >
        {SlaceRemovedName}
      </Link>
    </Breadcrumbs>
  );
}
