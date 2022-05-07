import React from "react";
import Card from "../components/Card";
import Squares from "../components/Squares";

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
      src: "/undraw_audio_player_re_cl20.png",
      title:
        "Gospelworld - A website for gospel songs, artists, lyrics and more",
      link: "https://gospelworld.vercel.app/",
    },
    {
      src: "/undraw_search_engines_nn9e.png",
      title:
        "Google-clone - Search engine built with Google Custom Search Engine",
      link: "https://r-google.vercel.app/",
    },
  ];
  return (
    <div className=" relative min-h-[60vh] text-white relative">
      <div className="md:sticky md:top-40">
        <h2 className="text-xl font-medium md:text-2xl">Works</h2>
        <p className="relative mt-2 text-sm opacity-70 md:w-72">
          A selection of projects I&apos;ve worked on, during my career as a
          software developer.
        </p>
        <span className="relative hidden md:block md:max-w-[300px] md:mt-10 md:top-24">
          <Squares />
        </span>
      </div>
      <div className="pt-10 ml-auto mr-0 space-y-5 md:pt-20 md:-mt-20 md:w-3/5 md:flex md:justify-between md:items-center md:space-x-5">
        <div className="space-y-5">
          {worksArrOne.map((_, i) => {
            return <Card key={i} data={_} />;
          })}
        </div>
        <div className="space-y-5 md:-mt-20">
          {worksArrTwo.map((_, i) => {
            return <Card key={i} data={_} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Works;
