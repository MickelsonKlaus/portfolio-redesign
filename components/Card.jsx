import Image from "next/image";
//import defaultImg from "../assets/joshua-earle-ICE__bo2Vws-unsplash.jpg";
import { motion } from "framer-motion";

function Card({ data }) {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.15, 1.1],
        rotate: [0, 10, -10, 0],
        transition: {
          duration: 1,
        },
        zIndex: 10,
      }}
      className="relative h-64 overflow-hidden bg-black rounded-md cursor-pointer group"
    >
      <motion.img
        whileHover={{
          scale: [1, 1.15, 1.1, 1],
        }}
        alt="default"
        src={data?.src}
        className="object-cover object-center w-full h-full"
      />
      <div className="absolute left-0 w-full px-5 py-5 transition-all duration-500 min-h-24 -bottom-40 rounded-t-md group-hover:bottom-0 bg-accent/80">
        <a
          href={data?.link}
          rel="noreferrer"
          className="relative top-0 z-20 font-medium text-white group-hover:underline"
        >
          {data?.title}
        </a>
      </div>
    </motion.div>
  );
}

export default Card;
