import React from "react";
import Card from "../components/Card";
import Squares from "../components/Squares";
import { NextSeo } from "next-seo";

function Works() {
  const worksArrOne = [
    {
      src: "/undraw_shopping_app_flsj.png",
      title: "Bigstore - An ecommerce website",
      link: "https://bigstore-70bec.web.app/",
    },
    {
      src: "/undraw_Messaging_re_pgx8.png",
      title: "Resox - An anonymous messaging and question creation site",
      link: "https://resox-m.vercel.app/",
    },
  ];
  const worksArrTwo = [
    {
      src: "/undraw_Blog_post_re_fy5x.png",
      title: "Dailyposts - A blog website built with Nextjs",
      link: "https://dailyposts.vercel.app/",
    },
    {
      src: "/undraw_search_engines_nn9e.png",
      title:
        "Google-clone - Search engine built with Google Custom Search Engine",
      link: "https://r-google.vercel.app/",
    },
  ];
  return (
    <>
      <NextSeo
        title="Braimah Destiny - Works"
        canonical="https://ibrad-dev.vercel.app/works"
        openGraph={{
          url: "https://ibrad-dev.vercel.app/works",
          title: "Braimah Destiny - Works",
        }}
      />
      <div className=" relative min-h-[60vh] text-white">
        <div className="lg:sticky lg:top-40">
          <h1 className="text-xl font-medium md:text-2xl">Works</h1>
          <p className="relative mt-2 text-sm opacity-70 md:w-72">
            A selection of projects I&apos;ve worked on, during my career as a
            software developer.
          </p>
          <span className="relative hidden md:block md:max-w-[300px] md:mt-10 md:top-24">
            <Squares />
          </span>
        </div>
        <div className="pt-10 ml-auto mr-0 space-y-5 lg:pt-20 lg:-mt-20 lg:w-3/5 lg:flex lg:justify-between lg:items-center lg:space-x-5">
          <div className="flex-1 space-y-5">
            {worksArrOne.map((_, i) => {
              return <Card key={i} data={_} />;
            })}
          </div>
          <div className="flex-1 space-y-5 md:-mt-20">
            {worksArrTwo.map((_, i) => {
              return <Card key={i} data={_} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
