import React from "react";

type Testimonial = {
  name: string;
  role: string;
  link: string;
  avatar: string;
  text: JSX.Element;
};

const testimonials: Testimonial[] = [
  {
    name: "Bryan Long",
    role: "Applications Support Manager",
    link: "https://twitter.com/iammrbt",
    avatar:
      "https://pbs.twimg.com/profile_images/1111711277200621573/TY255KfE_400x400.png",
    text: (
      <>
        XXXXXXXXXXXX XXXXXX XXXXX XXX XXXX, XXXXXXXXXXXXXX XXXXXXXXXX XXXX. XXXXXX XXXXXXXX, XXX XX XXXXXXXX XXXXXXXXX, XXXXX XXXXX XXXXXXXXXXXXXX XXXXX,
        XXXXX XXXXXX XXXXX XXXX XX XXXX. XXXX XXXXXX, XXXX XX XXXXXXXX XXXXXX, XXXXX XXXXX XXXXXX XXXX, XX XXXXXXXXX XXXX XXX XXXX XXXX.
        XXXXX XXXX XXX XXXXXX XXXXX.'
      </>
    ),
  },
  {
    name: "yassinek3ch",
    role: "One of the Top Moroccan HackerOne Hunters",
    link: "https://hackerone.com/yassinek3ch?type=user",
    avatar: "https://profile-photos.hackerone-user-content.com/variants/k4l0ajldkxy13tw0rwx1boe7m7aq/a1938579a09be1fcdc595f5dcc10af26bffeefe757e59142b301c05824df7876",
    text: (
      <>
        Kitsec impressed me. It's user-friendly and centralized, 
        making it fast and efficient. It offers a wide range of capabilities, including OWASP Top 10 coverage, 
        fuzzing, port scanning and more. It's an exceptional ethical hacking tool that I highly recommend.
      </>
    ),
  },
  
  {
    name: "Brian Short",
    role: "Techie 👨‍💻🚀",
    link: "https://twitter.com/ChrisBrocklesby",
    avatar:
      "https://pbs.twimg.com/profile_images/1244539207890034688/SX7ZG3nt_400x400.jpg",
    text: (
      <>
        XXXXXXXXXXXX XXXXXX XXXXX XXX XXXX, XXXXXXXXXXXXXX XXXXXXXXXX XXXX. XXXXXX XXXXXXXX, XXX XX XXXXXXXX XXXXXXXXX, XXXXX XXXXX XXXXXXXXXXXXXX XXXXX,
        XXXXX XXXXXX XXXXX XXXX XX XXXX. XXXX XXXXXX, XXXX XX XXXXXXXX XXXXXX, XXXXX XXXXX XXXXXX XXXX, XX XXXXXXXXX XXXX XXX XXXX XXXX.
        XXXXX XXXX XXX XXXXXX XXXXX.'
      </>
    ),
  },
];

export default function Testimonials(): JSX.Element {
  return (
    <section className="tw-pt-16 tw-pb-32 tw-px-4 lg:tw-px-8">
      <div className="tw-text-center">
        <div className="tw-text-sm lg:tw-text-base tw-text-emerald-500 tw-uppercase tw-font-bold tw-tracking-wider">
          Testimonials
        </div>
        <h2 className="tw-text-4xl lg:tw-text-5xl tw-mt-4 tw-font-extrabold">
          Support from the community
        </h2>
      </div>
      <div className="tw-max-w-7xl tw-mx-auto tw-mt-16 lg:tw-columns-3 tw-gap-4 lg:tw-gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="tw-mb-4 lg:tw-mb-8"
            style={{ breakInside: "avoid" }}
          >
            <div className="tw-p-6 tw-bg-gray-800 tw-rounded-xl tw-shadow-highlight">
              <div className="tw-flex tw-items-center">
                <a href={testimonial.link} target="_blank">
                  <img
                    src={testimonial.avatar}
                    className="tw-w-14 tw-h-14 tw-rounded-full tw-shadow"
                  />
                </a>
                <div className="tw-ml-3">
                  <div className="tw-font-semibold">
                    <a
                      className="tw-text-white"
                      href={testimonial.link}
                      target="_blank"
                    >
                      {testimonial.name}
                    </a>
                  </div>
                  <div className="tw-text-sm tw-text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="tw-text-gray-300 tw-mt-6 tw-text-base tw-mb-0">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
