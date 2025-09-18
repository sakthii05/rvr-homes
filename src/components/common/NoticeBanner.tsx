import Image from "next/image";
import React, { ReactNode } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const NoticeBanner = () => {
  const RepeatRender = (props: { icons: ReactNode; text: ReactNode }) => {
    return (
      <div className="flex items-center gap-3">
        <div className="text-xl pt-1 text-primary">{props.icons}</div>
        <div>{props.text}</div>
      </div>
    );
  };

  return (
    <div className="text-base flex flex-col gap-5 items-center px-5 pt-20">
      <h6>Our new site is almost here!</h6>

      <Image src={"/images/primarylogo.webp"} width={100} height={100} alt="logo" />
      <h1 className="text-xl font-urbanist font-semibold text-primary">
        Your Vision, Our Construction
      </h1>
      {/* <h3 className="text-lg font-bold">Sqft 2100/-</h3>
      <h4>Rate Starts for new buildings</h4> */}
      <div className="flex flex-col items-center gap-3">
        <RepeatRender
          icons={<IoLocationSharp className="ml-5" />}
          text={
            <div className="text-start ">
              No 45/5 Venkatesan Nagar second Cross Street, Virugambakkam,
              Chennai 92
            </div>
          }
        />
        <RepeatRender
          icons={<MdEmail />}
          text={<p>info.rvrhomes@gmail.com</p>}
        />
        <RepeatRender
          icons={<BsTelephoneFill />}
          text={<p>+91 9150346622</p>}
        />
      </div>
      <div className="font-semibold">
        Something exciting is coming... <br /> Site launching in October 2025
      </div>
    </div>
  );
};

export default NoticeBanner;
