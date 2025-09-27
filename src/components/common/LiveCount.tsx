"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { formatNumber } from "@/utils/common";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const LiveCount = (props: {
  count: number;
  suffix: string;
  className: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setIsVisible] = useState(false);
  const { count, suffix, className } = props;

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref]);

  return (
    <>
      <div ref={ref} className={className}>
        {visible && (
          <div className="flex items-center">
            <CountUp end={count} formattingFn={formatNumber}/>
            {suffix}
          </div>
        )}
      </div>
    </>
  );
};

export default LiveCount;
