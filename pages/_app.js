import Layout from '../components/Layout'
import '../styles/globals.css'
import { motion, AnimatePresence } from "framer-motion"
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <DefaultSeo
        description="With the power and beauty in programming and knowledge of design, I create stunning solutions for clients and help increase their return on investment by building software that converts prospects into loyal customers."
        canonical="https://ibrad-dev.vercel.app/"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          site_name: 'Braimah Destiny - React Frontend Developer',
          images: [
            {
              url: 'https://ibrad-dev.vercel.app/kite.svg',
              width: 800,
              height: 600,
              alt: 'kite showing our aim',
              type: 'image/jpeg',
            },
          ],
          description: "With the power and beauty in programming and knowledge of design, I create stunning solutions for clients and help increase their return on investment by building software that converts prospects into loyal customers."
        }}
        twitter={{
          handle: '@iDevBraD',
          site: '@iDevBraD',
          cardType: 'summary',
        }}
      />
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
