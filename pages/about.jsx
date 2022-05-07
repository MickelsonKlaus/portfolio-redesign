import React from "react";
import Squares from "../components/Squares";

function about() {
  return (
    <div className=" relative min-h-[60vh] text-white">
      <div className=" md:max-w-[500px]">
        <h2 className="text-xl font-medium md:text-2xl">About</h2>
        <p className="relative my-3 text-sm opacity-70">
          I&apos;m a front-end developer based in Nigeria. I started my coding
          career back in 2019 while I was still in college. It was challenging
          because I had to balance it with school. The primary area of my
          interest is in front-end development, although I know a bit of backend
          development. But making little steps without being in haste has help
          me a lot. On the long run, I plan to become a full-stack developer.
        </p>
        <p className="relative my-3 text-sm opacity-70">
          In my years of learning, I have been able to work voluntarily, work
          with teams, work as an intern and lots more. I currently work as a
          freelance developer with some selected freelance client. Build
          personal projects on my free time. Improve my UI/UX skill and
          volunteer for free projects.
        </p>
        <p className="relative my-3 text-sm opacity-70">
          I love working on products that contribute to the growth of
          businesses. I don&apos;t just program or write codes, I help client
          solve problems and increase the Return On Investments(ROI) by building
          websites that converts prospects into loyal customers. Client
          satisfaction is my top most priority.
        </p>
        <p className="relative my-5 text-sm opacity-70">
          <a
            href="/my resume.pdf"
            className="underline"
            download="Destiny Braimah Resume"
          >
            Download
          </a>{" "}
          my resume for more info about me.
        </p>
      </div>
      <Squares />
    </div>
  );
}

export default about;
