import ViewLimit from "@/components/common/ViewLimit";
import React, { ReactNode } from "react";

const PrivacyPolicy = () => {
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
        <title>Privacy Policy</title>
        <div className="flex justify-center">
          <div className=" lg:w-[70%]  pt-24 pb-10  md:pt-28 px-10 space-y-5 ">
            <h2 className="text-xl font-semibold">
              PrivacyPolicy {`(04/10/2025)`}
            </h2>
            <p>
              At <span className="font-semibold">RVR HOMES</span>, we respect
              your privacy and are committed to protecting any personal
              information you share with us.
            </p>
            <List
              title={"Information We Collect"}
              subtext={
                <>
                  <p>
                    We may collect the following information when you interact
                    with our website or services:
                  </p>
                  <p>Information related to orders, invoices, and payments.</p>
                  <p>Website usage data via cookies/analytics.</p>
                </>
              }
            />
            <List
              title={"How We Use Your Information"}
              subtext={
                <>
                  <p>
                    To respond to inquiries and provide product/service
                    information
                  </p>
                  <p>To process orders, quotations, and service requests.</p>
                  <p>To improve our website, products, and services.</p>
                  <p>To comply with legal and regulatory obligations.</p>
                </>
              }
            />
            <List
              title={"Cookies & Analytics"}
              subtext={
                <>
                  <p>
                    We may use cookies and third-party tools e.g., Google
                    Analytics to track website performance and enhance user
                    experience.
                  </p>
                  <p>You can disable cookies in your browser settings.</p>
                </>
              }
            />
            <List
              title={"Sharing of Information"}
              subtext={
                <>
                  <p>We do not sell or rent your personal data.</p>
                  <p>
                    Information may be shared with trusted third-party service
                    providers e.g., shipping, payment, IT services only to
                    complete transactions.
                  </p>
                  <p>We may disclose information if required by law.</p>
                </>
              }
            />
            <List
              title={"Data Security"}
              subtext={
                <>
                  <p>
                    We implement reasonable security measures to protect your
                    information.
                  </p>
                  <p>
                    However, no method of transmission over the internet is
                    fully secure, and we cannot guarantee 100% security.
                  </p>
                </>
              }
            />
            <List
              title={"Your Rights"}
              subtext={
                <>
                  <p>
                    You may request correction, update, or deletion of your
                    personal information by contacting us.
                  </p>
                  <p>
                    For any privacy-related queries, please email us at{" "}
                    <span className="text-blue-500">
                      info.rvrhomes@gmail.com
                    </span>
                    .
                  </p>
                </>
              }
            />
            <List
              title={"Updates to Policy"}
              subtext={
                <>
                  <p>
                    We may update this Privacy Policy from time to time. Any
                    changes will be posted on this page with a revised date.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </ViewLimit>
    </>
  );
};

export default PrivacyPolicy;
