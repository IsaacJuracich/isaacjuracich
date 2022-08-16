import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Projects() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1
          className="font-extrabold lg:text-9xl md:text-8xl text-transparent text-7xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
          data-aos="slide-down"
          data-aos-duration={700}
          data-aos-delay={300}
          data-aos-once="true"
        >
          My
        </h1>
        <h1
          className="font-extrabold lg:text-9xl md:text-8xl text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 blur-sm"
          data-aos="slide-up"
          data-aos-duration={700}
          data-aos-delay={300}
          data-aos-once="true"
        >
          Projects
        </h1>
        <div
          className="blur-sm"
          style={{
            display: "block",
            height: "1px",
            border: "0px",
            borderTop: "1px solid #ccc",
            margin: "1em 0px",
            padding: "0px",
            width: "75vh",
          }}
        />
        <div>
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          ></link>
          <section className="text-gray-400  body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div
                  className="p-4 md:w-1/3"
                  data-aos="slide-right"
                  data-aos-duration={700}
                  data-aos-delay={300}
                  data-aos-once="true"
                >
                  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden bg-gray-900">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://www.metaforge.art/static/media/MFbigLogo.9f4684a9bb10d891d577.png"
                      alt="blog"
                    ></img>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        METAFORGE
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        Software Developer
                      </h1>
                      <p className="leading-relaxed mb-3">
                        At Metaforge, I created one of the first 1.18 clients,
                        and the first client to connect with Web3 on minecraft.
                        The client was connected to the solana blockchain, and
                        had full MagicEden support within the UI. The client had
                        over 20+ mods, Proximity Chat, Voice Chat, and more.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0"
                          href="https://metaforge.art"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="p-4 md:w-1/3"
                  data-aos="slide-up"
                  data-aos-duration={700}
                  data-aos-delay={300}
                  data-aos-once="true"
                >
                  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden bg-gray-900">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://media.discordapp.net/attachments/983885401720758313/1005942034760204308/orbitwhite.png?width=1068&height=1068"
                      alt="blog"
                    ></img>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        ORBITCLIENT
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        Software Developer
                      </h1>
                      <p className="leading-relaxed mb-3">
                        While I worked at OrbitClient, I managed the client; and
                        produced updates. The client itself was built on the
                        Forge 1.8.9 MDK in Java. The client was etablished as
                        one of the best factions clients. With over 40+ mods,
                        and a group system connecting players with Socket.io.
                      </p>
                      <div className="flex items-center flex-wrap">
                        <a
                          className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0"
                          href="https://orbitclient.com"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="p-4 md:w-1/3"
                  data-aos="slide-left"
                  data-aos-duration={700}
                  data-aos-delay={300}
                  data-aos-once="true"
                >
                  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden bg-gray-900">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/014/011/original/checklist_5192369.png"
                      alt="blog"
                    ></img>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        MCLIST
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        Web Developer
                      </h1>
                      <p className="leading-relaxed mb-3">
                        MCList, is a web site that tracks and provides
                        information for upcoming Minecraft Servers, and Maps.
                        The site is built with Next.js, TailwindCss. You can
                        create an account, and vote for a map, or server. Which
                        allows Minecraft Servers to add more voting services to
                        their server.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0"
                          href="https://mclist.info"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center pt-8">
                <button
                  style={{
                    borderSpacing: "1em .5em",
                    borderWidth: "2px",
                    borderImage: "linear-gradient(90deg, #33F3FF, #33A2FF) 1",
                    width: "65vh",
                    height: "50px",
                  }}
                  data-aos="fade-right"
                  data-aos-duration={700}
                  data-aos-delay={300}
                  data-aos-once="true"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <h2 className="text-2xl transform transition duration-500 hover:scale-125 font-semibold">
                    Go Back
                  </h2>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
