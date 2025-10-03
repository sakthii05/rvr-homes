import ViewLimit from "@/components/common/ViewLimit";
import React, { ReactNode } from "react";

const TandC = () => {
  const List = (props: { title: string; subtext: ReactNode }) => {
    const { title, subtext } = props;
    return (
      <div className="space-y-2 ">
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="space-y-2">{subtext}</div>
      </div>
    );
  };

  return (
    <>
      <ViewLimit>
        <title>Terms & conditions</title>
        <div className="flex justify-center">
          <div className=" lg:w-[70%]  pt-24 pb-10  md:pt-28 px-10 space-y-5 ">
            <h2 className="text-xl font-semibold">
              Terms and conditions {`(04/10/2025)`}
            </h2>
            <p>
              Welcome to the official website of{" "}
              <span className="font-semibold">RVR HOMES</span>. By accessing or
              using this website{" "}
              <a href="https://rvrhomes.in" className="text-blue-500 underline">
                https://rvrhomes.in
              </a>
              , you agree to the following terms and conditions. Please read
              them carefully.
            </p>
            <List
              title={"General"}
              subtext={
                <>
                  <p>
                    This website is owned and operated by{" "}
                    <span className="font-semibold">RVR HOMES</span>,
                    established in 2025 in Chennai, Tamil Nadu, India.
                  </p>

                  <p>
                    By using our site, you accept these terms. If you do not
                    agree, please do not use our website.
                  </p>
                </>
              }
            />
            <List
              title={"Services"}
              subtext={
                <>
                  <p>
                    We are engaged in providing services in New Home
                    Construction, Renovation, and Interior Design, along with
                    related home improvement solutions.
                  </p>
                  <p>
                    Images, designs, and descriptions shown on our website are
                    for illustrative purposes only; actual work may vary based
                    on site conditions, materials, and client requirements.
                  </p>
                  <p>
                    We reserve the right to update, modify, or discontinue our
                    services, designs, or processes without prior notice, while
                    ensuring quality and client satisfaction remain our
                    priority.
                  </p>
                </>
              }
            />
            <List
              title={"Orders & Payments"}
              subtext={
                <>
                  <p>
                    Any orders placed through our sales team or website - if
                    enabled are subject to confirmation.
                  </p>
                  <p>
                    Pricing, taxes, and shipping charges will be communicated
                    before order confirmation.
                  </p>
                  <p>
                    Payments must be made through the approved payment channels
                    shared by RVR HOMES.
                  </p>
                </>
              }
            />
            <List
              title={"Intellectual Property"}
              subtext={
                <>
                  <p>
                    All logos, designs, product images, content, and materials
                    on this site are the property of RVR HOMES.
                  </p>
                  <p>
                    Unauthorized use, reproduction, or distribution is strictly
                    prohibited.
                  </p>
                </>
              }
            />
            <List
              title={"Limitation of Liability"}
              subtext={
                <>
                  <p>
                    We are not liable for any indirect or consequential damages
                    arising from the use of our products, services, or website.
                  </p>
                  <p>
                    Technical data and recommendations are given in good faith
                    but must be verified by the customer for their specific
                    application.
                  </p>
                </>
              }
            />
            <List
              title={"Governing Law"}
              subtext={<p>These terms are governed by the laws of India.</p>}
            />
          </div>
        </div>
      </ViewLimit>
    </>
  );
};

export default TandC;
