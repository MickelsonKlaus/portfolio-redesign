import Image from "next/image"
import Link from "next/link"
import { kite } from "../assets/svg"
import { motion } from "framer-motion"
import { NextSeo } from "next-seo";

export default function Home() {
  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <>
      <NextSeo
        title="Braimah Destiny - Home"
        canonical="https://ibrad-dev.vercel.app/"
        openGraph={{
          url: 'https://ibrad-dev.vercel.app/',
          title: 'Braimah Destiny - Home',
        }}
      />
      <div
        className="relative flex flex-col items-center justify-start mx-auto space-y-2 text-white transition-all duration-200 md:flex-row md:justify-between">
        <motion.div initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, translateY: -50 },
            visible: {
              translateY: 0, opacity: 1, transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
                staggerDirection: -1
              }
            }
          }} >
          <motion.p variants={item} className="mb-2 opacity-70">Hello</motion.p>
          <motion.h1 variants={item} className="mb-5 text-3xl font-medium md:text-4xl lg:text-5xl">I&apos;m Braimah Destiny, a React Frontend Developer</motion.h1>
          <motion.p variants={item} className="mb-5 text-sm font-medium text-accent">With the power and beauty in programming and knowledge of design, I create stunning solutions for clients and help increase their return on investment by building software that converts prospects into loyal customers</motion.p>
          <Link href="/contact" passHref={true}>
            <motion.a variants={item}
              className="block px-5 py-3 mb-5 text-sm font-medium transition-all duration-200 rounded-md w-fit bg-accent hover:scale-105">Let&apos;s discuss or hire me</motion.a>
          </Link>
        </motion.div>
        <motion.div initial={{ x: 10, y: 40, opacity: 0 }} animate={{
          x: 0, y: 0, opacity: 1
        }} transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}>
          <Image src={kite} alt="kite" height={300} />
        </motion.div>
      </div></>
  )
}
