import { AnimatePresence, motion } from "framer-motion";
import { DefaultSeo } from "next-seo";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <DefaultSeo
        description="I create stunning solutions for clients and help increase their return on investment by building software that converts prospects into loyal customers."
        canonical="https://ibrad.xyz/"
        openGraph={{
          type: "website",
          site_name: "Braimah Destiny - React Frontend Developer",
          images: [
            {
              url: "https://ibrad.xyz/undraw_Developer_activity_re_39tg.png",
              alt: "Developer",
              type: "image/jpeg",
            },
          ],
          description:
            "I create stunning solutions for clients and help increase their return on investment by building software that converts prospects into loyal customers.",
        }}
        twitter={{
          handle: "@iDevBraD",
          site: "@iDevBraD",
          cardType: "summary",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Destiny, Braimah Destiny, Braimah, Frontend Developer, React, customers, building software, help increase, create stunning solutions, stunning, converts prospects, create, converts, clients, building, software, Front End Developer, solutions, investment, prospects",
          },
        ]}
      />
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
              x: -100,
            },
            pageAnimate: {
              opacity: 1,
              x: 0,
            },
            pageExit: {
              x: -100,
              opacity: 0,
              height: 0,
              width: 0,
              overflow: "hidden",
              transition: 0.1,
            },
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
