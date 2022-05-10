import Image from "next/image";
import {
  css,
  html,
  firebase,
  javascript,
  tailwind,
  material,
  github,
  react,
  typescript,
  next,
} from "../assets/icons";
import Squares from "../components/Squares";
import { NextSeo } from "next-seo";

function Skills() {
  let skillsArr = [
    {
      icon: html,
      tech: "html",
    },
    {
      icon: css,
      tech: "css",
    },
    {
      icon: tailwind,
      tech: "tailwindcss",
    },
    {
      icon: javascript,
      tech: "javascript",
    },
    {
      icon: typescript,
      tech: "typescript",
    },
    {
      icon: react,
      tech: "react",
    },
    {
      icon: next,
      tech: "next",
    },
    {
      icon: firebase,
      tech: "firebase",
    },
    {
      icon: material,
      tech: "material",
    },
    {
      icon: github,
      tech: "github",
    },
  ];
  return (
    <>
      <NextSeo
        title="Braimah Destiny - Skills"
        canonical="https://ibrad-dev.vercel.app/skills"
        openGraph={{
          url: "https://ibrad-dev.vercel.app/skills",
          title: "Braimah Destiny - Skills",
        }}
      />
      <div className="relative min-h-[60vh] text-white">
        <div className="md:max-w-[500px]">
          <h1 className="text-xl font-medium md:text-2xl">Skills</h1>
          <p className="my-3 mt-2 text-sm opacity-70">
            These are the skills I possess and technologies I use.
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,150px))] w-full gap-5 mt-10">
            {skillsArr.map((_, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-sm font-medium uppercase"
                >
                  <Image src={_.icon} alt="icon" height={700} width={2000} />
                  <h3 className="mt-3">{_.tech}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <Squares />
      </div>
    </>
  );
}

export default Skills;
