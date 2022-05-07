import { motion } from "framer-motion";
import Image from "next/image";
import { squares } from "../assets/svg";

function Squares() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 0.5,
        y: -100,
      }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
      className="absolute hidden -translate-y-1/2 md:block top-1/2 right-10"
    >
      <Image src={squares} alt="squares" height={150} />
    </motion.div>
  );
}

export default Squares;
