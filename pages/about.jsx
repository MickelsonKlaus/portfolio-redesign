import Squares from "../components/Squares";
import { NextSeo } from "next-seo";

function about() {
  return (
    <>
      <NextSeo
        title="Braimah Destiny - About"
        canonical="https://ibrad-dev.vercel.app/about"
        openGraph={{
          url: "https://ibrad-dev.vercel.app/about",
          title: "Braimah Destiny - About",
        }}
      />
      <div className=" relative min-h-[60vh] text-white">
        <div className=" md:max-w-[500px]">
          <h1 className="text-xl font-medium md:text-2xl">About</h1>
          <p className="relative my-3 text-sm opacity-70">
            I&apos;m a front-end developer based in Nigeria. I started my coding
            career back in 2019 while I was still in college. It was challenging
            because I had to balance it with school work. The primary area of my
            interest is in front-end development, although I know a bit of
            backend development. But making little steps without being in haste
            has helped me a lot. In the long run, I plan to become a full-stack
            developer.
          </p>
          <p className="relative my-3 text-sm opacity-70">
            In my years of learning, I have been able to work voluntarily, work
            with teams, work as an intern, and more. I&apos;m currently working
            as a freelance developer. Building personal projects in my free
            time. Improving my UI/UX skill and volunteering for other free
            projects.
          </p>
          <p className="relative my-3 text-sm opacity-70">
            I love working on products that contribute to the growth of
            businesses. I don&apos;t just program or write codes, I help the
            client solve problems and increase the Return On Investments(ROI) by
            building websites that convert prospects into loyal customers.
            Client satisfaction is my topmost priority.
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
    </>
  );
}

export default about;
