import { motion } from "framer-motion";
import Image from "next/image";

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
      className="relative w-full h-64 overflow-hidden bg-black rounded-md cursor-pointer group"
    >
      <motion.div
        whileHover={{
          scale: [1, 1.15, 1.1, 1],
        }}
        className="w-full h-full"
      >
        <Image
          alt="default"
          src={data?.src}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </motion.div>
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
