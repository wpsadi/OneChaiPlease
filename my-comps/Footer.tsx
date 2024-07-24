import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter,FaGithubAlt, FaFacebook,FaInstagram  } from "react-icons/fa6";
function Footer() {

   

    const FooterDetails = {
    title: "OneChaiPlease",
    description: "A website to fund your projects by allowing them to recieve donations from their fans",
    developedBy:"@wpsadi",
    bottommostProfileLink:"https://github.com/wpsadi",
    year:2024
    }
  const FooterCategoriesList = [
    {
      heading: "Navigation",
      data: [
        {
          name: "First Link",
          link: "#",
        },
        {
          name: "Second Link",
          link: "#",
        },
        {
          name: "Third Link",
          link: "#",
        },
        {
          name: "Fourth Link",
          link: "#",
        },
      ],
    },
    {
      heading: "Categories",
      data: [
        {
          name: "First Link",
          link: "#",
        },
        {
          name: "Second Link",
          link: "#",
        },
        {
          name: "Third Link",
          link: "#",
        },
        {
          name: "Fourth Link",
          link: "#",
        },
      ],
    },
    {
      heading: "Categories",
      data: [
        {
          name: "First Link",
          link: "#",
        },
        {
          name: "Second Link",
          link: "#",
        },
        {
          name: "Third Link",
          link: "#",
        },
        {
          name: "Fourth Link",
          link: "#",
        },
      ],
    },
    {
      heading: "Categories",
      data: [
        {
          name: "First Link",
          link: "#",
        },
        {
          name: "Second Link",
          link: "#",
        },
        {
          name: "Third Link",
          link: "#",
        },
        {
          name: "Fourth Link",
          link: "#",
        },
      ],
    },
  ];
  const socialMediaFooterList = [
    {
      name: "Twitter",
      link: "#",
      tag:FaXTwitter
    },
    {
      name: "Facebook",
      link: "#",
      tag:FaFacebook
    },
    {
      name: "Instagram",
      link: "#",
        tag:FaInstagram
    },
    {
        name: "GitHub",
        link: "https://github.com/wpsadi",
        tag:FaGithubAlt
      }
  ]

  return (
    <div>
      <footer className=" body-font">
        <div className="bg-gray-600 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <span className="flex title-font font-medium items-center md:justify-start justify-center text-whit-900">
              <Image src="/favicon.ico" className="mr-3" height={24} width={24} alt={`${FooterDetails.title} Logo`} />
              <span className="ml-3 text-xl text-gray-300">{FooterDetails.title}</span>
            </span>
            <p className="mt-2 text-sm text-gray-400">
              {
                FooterDetails.description
              }
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {FooterCategoriesList &&
              FooterCategoriesList.map((categories, index) => (
           
                  <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-white text-md tracking-widest mb-3">
                     { categories.heading}
                    </h2>
                    <ul className="list-none mb-10">
                      {categories.data &&
                        categories.data.map((data, index) => (
                          <li key={index}>
                            <Link
                              href={data.link}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              {data.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                </div>
              ))}
          </div>
        </div>
        <div className="bg-gray-300 sticky bottom-0">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {FooterDetails.year} {FooterDetails.title} —
              <Link
                href={FooterDetails.bottommostProfileLink}
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                {FooterDetails.developedBy}
              </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 gap-2 justify-center sm:justify-start">
                {
                    socialMediaFooterList  && socialMediaFooterList.map((icons,index)=><Link target="_blank" href={icons.link} className="text-gray-500" title={icons.name} key={index}>
                        <icons.tag className="w-5 h-5"/>
                    </Link>)
                }
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
