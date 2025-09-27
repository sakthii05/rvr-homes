import React, { ReactNode } from "react";

const ViewLimit = (props: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1350px] w-screen">{props.children}</div>
    </div>
  );
};

export default ViewLimit;
