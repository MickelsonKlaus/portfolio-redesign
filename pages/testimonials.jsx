import Image from "next/image";
import { motion } from "framer-motion";
import Squares from "../components/Squares";
import { NextSeo } from "next-seo";

function testimonials() {
  return (
    <>
      <NextSeo
        title="Braimah Destiny - Testimonials"
        canonical="https://ibrad.xyz/testimonials"
        openGraph={{
          url: "https://ibrad.xyz/testimonials",
          title: "Braimah Destiny - Testimonials",
        }}
      />
      <div className="relative min-h-[60vh] text-white">
        <h1 className="text-xl font-medium md:text-2xl">Testimonials</h1>
        <p className="my-3 mt-2 text-sm opacity-70">
          Some of my happy and satisfied clients and what they are saying
        </p>
        <div className="mt-10 max-w-[500px]">
          <motion.div
            whileHover={{
              scale: [1, 1.15, 1.1],
              transition: {
                duration: 1,
              },
            }}
            className="flex items-center justify-between p-3 space-x-3 bg-black rounded-md shadow-sm shadow-gray-500/10"
          >
            <Image
              src="/XamR3u_O_400x400.jpg"
              alt="default"
              width={200}
              height={200}
              className="object-cover rounded-full"
            />
            <div>
              <blockquote className="text-sm">
                <q>
                  I gave him my portfolio to give me a unique design and he gave
                  me more than that. Great to work with.
                </q>
                <cite className="block mt-3 text-xs font-medium opacity-70">
                  Otuedon
                </cite>
              </blockquote>
            </div>
          </motion.div>
        </div>
        <Squares />
      </div>
    </>
  );
}

export default testimonials;
