import Aos from "aos";
import { useEffect, useState } from "react";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { SWRConfig } from "swr";
import fetch from "../libs/fetchJson";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { MyProvider } from "../providers/ContextProvider";
config.autoAddCss = false;

function IsaacJuracichStarter({
  Component,
  pageProps: { ...pageProps },
  router,
}) {
  useEffect(() => {
    import("aos/dist/aos.js");
    Aos.init();
  }, []);
  const [exitBefore, setExitBefore] = useState(false);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
        <title>Isaac Juracich</title>
        <meta name="description" content="Powered By Isaac Juracich" />
        <link rel="icon" type="image/x-icon" href="/isaac_juracich.png"></link>
      </Head>
      <SWRConfig
        value={{
          fetcher: fetch,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter={!exitBefore}>
            <m.div
              key={router.route.concat("Fade Back")}
              className="page-wrap"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: {
                  opacity: 0,
                  scale: 0.9,
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                },
                exit: {
                  opacity: 0,
                  scale: 0.9,
                },
              }}
              transition={{
                duration: 1.8,
              }}
            >
              <MyProvider>
                <Navbar {...pageProps} />
                <NextNProgress
                  options={{ easing: "ease", speed: 250, showSpinner: false }}
                  color="#f8f8f8"
                  startPosition={0.3}
                  stopDelayMs={500}
                  height={2}
                  showOnShallow={true}
                  showSpinner={false}
                />
                <Component {...pageProps} />
                <Footer {...pageProps} />
              </MyProvider>
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </SWRConfig>
    </>
  );
}

export default IsaacJuracichStarter;
