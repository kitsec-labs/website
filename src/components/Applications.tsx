import React from "react";

type Feature = {
  title: string;

  icon: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const features: Feature[] = [
  {
    title: "Run it on your VPS",
    icon: require("@site/static/icons/linode.svg").default,
    description: (
      <>
        Run it on your VPS or directly from the command line.
      </>
    ),
  },
  {
    title: "Find it on GitHub",
    icon: require("@site/static/icons/github.svg").default,
    description: (
      <>
        With a simple command, check any SSL/TLS certificates you need.
      </>
    ),
  },
  {
    title: "Run it on your local machine",
    icon: require("@site/static/icons/terminal.svg").default,
    description: (
      <>
        Run the CLI in your terminal or your VPS.
      </>
    ),
  },
  {
    title: "Blazing fast",
    icon: require("@site/static/icons/bolt_fast.svg").default,
    description: (
      <>Using multithread-pooling all functions are.</>
    ),
  },
  {
    title: "Deploy on Docker",
    icon: require("@site/static/icons/docker.svg").default,
    description: (
      <>Fast deployment on docker for cross os compatibility.</>
    ),
  },
  {
    title: "Dockerfile not required",
    icon: require("@site/static/icons/open_source.svg").default,
    description: (
      <>
        It's an open source project. It's transparent and ready for contributions.
      </>
    ),
  },
];

export default function Applications(): JSX.Element {
  return (
    <section className="tw-py-24 lg:tw-px-8">
      <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-20 lg:tw-items-center">
        <div className="tw-p-4">
        </div>
      </div>
      <div className="tw-max-w-7xl tw-mx-auto tw-mt-10 tw-grid lg:tw-grid-cols-3 tw-gap-x-20">
        {features.map((feature, index) => (
          <div key={index} className="tw-p-4">
            <feature.icon className="tw-fill-emerald-500 tw-w-12 tw-h-12" />
            <h3 className="tw-mt-4 tw-mb-2 tw-text-xl">{feature.title}</h3>
            <p className="tw-text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
