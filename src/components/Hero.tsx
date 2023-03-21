import Link from "@docusaurus/Link";
import React from "react";
type Partner = {
  href: string;
  logo: string;
};


export default function Hero(): JSX.Element {
  return (
    <section className="tw-py-24 lg:tw-py-32 tw-text-center" style={{ paddingBottom: "8rem" }}>
      <div className="tw-text-sm lg:tw-text-base tw-text-gray-400 tw-uppercase tw-font-bold tw-tracking-wider tw-mb-4">
        Powered by Kitsec
      </div>
      <h1 className="tw-text-4xl lg:tw-text-7xl tw-tracking-tight tw-leading-none tw-font-extrabold tw-px-4">
        <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-green-500 tw-to-indigo-600">
          Ethical Hacking
        </span>
        <br /> Made Easy
      </h1>
      <p className="tw-text-lg lg:tw-text-xl tw-font-normal tw-text-gray-400 tw-max-w-2xl tw-mx-auto tw-px-4">
        Simplify your workflow with Kitsec.
      </p>
      <div className="tw-px-4 tw-mt-8">
        <a href="https://pypi.org/project/kitsec/" target="_blank" rel="noopener noreferrer">
          <input
            className="tw-bg-gray-800 tw-text-white tw-p-4 tw-border-0 hover:tw-scale-105 tw-rounded-lg tw-font-mono tw-font-bold tw-text-base tw-text-center tw-w-[430px] tw-max-w-full tw-cursor-pointer tw-shadow-highlight"
            defaultValue="pip install kitsec"
            onFocus={(e) => e.currentTarget.select()}
            onSelect={(e) => e.currentTarget.select()}
            readOnly
          />
        </a>
      </div>
    </section>
  );
}
