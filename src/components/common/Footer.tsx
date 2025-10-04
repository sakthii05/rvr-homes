import Link from "next/link";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  const FooterMenus = (props: {
    title: string;
    menus: { label: string; link: string }[];
  }) => {
    const { title, menus } = props;
    return (
      <div className="space-y-3">
        <h4 className="text-lg font-semibold">{title}</h4>
        <div className="gap-2 flex flex-col text-sm">
          {menus.map((menu, index) => (
            <Link
              href={menu.link}
              target="_self"
              className="font-medium hover:text-primary"
              key={index}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full text-foreground bg-[url(/images/footer.png)] bg-cover">
      {/* <div className="relative p-5 rounded-b-[5rem] h-10 bg-background w-full shadow-xl"></div> */}
      <div className="  flex justify-center px-10">
        <div className="w-full lg:w-[75%]">
          <div className="flex flex-wrap justify-between gap-5  border-b-2 border-gray-300 py-12 sm:py-20  font-medium">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold ">Contact</h4>
              <div className="gap-2 flex flex-col text-sm">
                <div className="flex gap-3 items-center">
                  <IoMail className="text-xl" />
                  <div>info.rvrhomes@gmail.com</div>
                </div>
                <div className="flex gap-3 items-center">
                  <BsTelephoneFill className="text-xl" />
                  <div>+91 9150346622</div>
                </div>
              </div>
            </div>
            <FooterMenus
              title="Service"
              menus={[
                { label: "Home Construction", link: "/#services" },
                { label: "Renovation", link: "/#services" },
                { label: "Interior Design", link: "/#services" },
              ]}
            />

            <FooterMenus
              title="Company"
              menus={[
                { label: "Home", link: "/" },
                { label: "About us", link: "/#aboutus" },
                { label: "Terms & conditions", link: "/terms-and-conditions" },
                { label: "Privacy Policy", link: "/privacy-policy" },
              ]}
            />
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Location</h4>
              <Link
                href={"https://maps.app.goo.gl/xVSvR9GUvBkwUDLa7"}
                target="_blank"
                className="flex gap-3 text-sm hover:text-primary "
              >
                <MdLocationOn className="text-xl mt-1" />
                <div>
                  No 52,53, 1st floor Shop No:1, Kamarajar Salai,
                  <br /> venkatesh nagar, Virugambakkam,
                  <br />
                  Chennai-600092
                </div>
              </Link>
            </div>
          </div>
          <div className="flex w-full gap-5 justify-between py-5 flex-wrap text-xs font-medium">
            <div className="">
              <div className="pb-1">© 2025 RVR HOMES. All Rights Reserved</div>
              <Link
                href={"https://linkedin.com/in/sakthivel-2022-webdev"}
                target="_blank"
                className="hover:text-primary"
              >
                Developed by @sakthivel
              </Link>
            </div>

            <div className="flex items-center gap-3 text-xl ">
              {/* <SiLinkedin className="hover:text-secondary hover:cursor-pointer" />
              <PiInstagramLogoFill className="hover:text-primary hover:cursor-pointer" /> */}
            </div>
          </div>
          <div className="h-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
