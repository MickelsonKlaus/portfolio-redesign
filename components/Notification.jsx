import Image from "next/image";
import { check } from "../assets/svg";
import { motion } from "framer-motion";

function Notification() {
  let variants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    final: {
      opacity: 0,
      scale: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="final"
      transition={{
        delay: 2,
      }}
      variants={variants}
      className="fixed px-5 py-3 text-white bg-black rounded-md shadow-sm top-20 right-10 h-fit shadow-gray-500/30"
    >
      <p className="flex items-center justify-between">
        Message Sent <Image src={check} alt="check" height={20} />
      </p>
    </motion.div>
  );
}

export default Notification;
