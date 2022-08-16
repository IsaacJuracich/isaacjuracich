import { useMyContext } from "../providers/ContextProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function HireMe() {
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
          Hire
        </h1>
        <h1
          className="font-extrabold lg:text-9xl md:text-8xl text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 blur-sm"
          data-aos="slide-up"
          data-aos-duration={700}
          data-aos-delay={300}
          data-aos-once="true"
        >
          Me
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
        <div
          className="mt-5 text-2xl flex justify-center items-center"
          style={{
            maxWidth: "75vh",
          }}
        >
          <h3
            className="font-semibold text-center transform transition duration-500 hover:scale-125"
            data-aos="fade-right"
            data-aos-duration={900}
            data-aos-delay={300}
            data-aos-once="true"
          >
            Why Should you hire me?
          </h3>
        </div>
        <div
          className="mt-2 flex justify-center items-center"
          style={{
            maxWidth: "75vh",
          }}
        >
          <h3
            className="text-center transform transition duration-500 hover:scale-125"
            data-aos="fade-right"
            data-aos-duration={900}
            data-aos-delay={300}
            data-aos-once="true"
          >
            I'm a Fullstack Developer who's very proficient and passionate about
            anything I build. Always straight forward with all of my clients. I
            have a fast turn around time, and reasonably priced rates. There is
            companies that are taking advantage of people by overpricing them,
            and lying to them about their services.
          </h3>
        </div>
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
        <div
          className="text-2xl flex justify-center items-center pt-4 pb-2"
          style={{
            maxWidth: "75vh",
          }}
        >
          <h3
            className="font-semibold text-center transform transition duration-500 hover:scale-125"
            data-aos="fade-right"
            data-aos-duration={900}
            data-aos-delay={300}
            data-aos-once="true"
          >
            Contact Me
          </h3>
        </div>
        <div className="text-1xl text-center">
          <div className={styles.code}>
            <a href="mailto=isaac.juracich@icloud.com">
              isaac.juracich@icloud.com
            </a>
          </div>
          <br />
          <div className={styles.code}>
            <a href="tel=3604104482">3604104482</a>
          </div>
        </div>

        <div className="pt-8">
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
        <div className="pt-4">
          <button
            style={{
              borderSpacing: "1em .5em",
              borderWidth: "2px",
              borderImage: "linear-gradient(90deg, #6366f1, #6366f1) 1",
              width: "65vh",
              height: "50px",
            }}
            data-aos="fade-right"
            data-aos-duration={700}
            data-aos-delay={300}
            data-aos-once="true"
            onClick={() => {
              router.push("/projects");
            }}
          >
            <h2 className="text-2xl transform transition duration-500 hover:scale-125 font-semibold">
              My Projects
            </h2>
          </button>
        </div>
      </main>
    </div>
  );
}
