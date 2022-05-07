import Layout from '../components/Layout'
import '../styles/globals.css'
import { motion, AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence>
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
          pageInitial: {
            opacity: 0,
            x: -100
          },
          pageAnimate: {
            opacity: 1,
            x: 0
          },
          pageExit: {
            x: -100,
            opacity: 0,
            height: 0,
            width: 0,
            overflow: "hidden",
            transition: .1
          }
        }} transition={{
          duration: .5
        }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>)
}

export default MyApp
