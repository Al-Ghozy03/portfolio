/* eslint-disable react/jsx-no-target-blank */
import Lottie from "react-lottie";
import codeAnimation from "../Assets/108333-coding.json";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-between pt-32 lg:px-16 items-center space-x-6"
    >
      <article className="flex space-x-6">
        <aside className="space-y-3 flex flex-col items-center w-20">
          <div className="h-40 w-0.5 bg-gray-300"></div>
          <a href="https://www.instagram.com/faizghozy23/" target={"_blank"}>
            <svg
              className="text-[#BFBFBF] h-7"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058c.782-.037 1.309-.142 1.797-.331a2.92 2.92 0 0 0 1.08-.702c.337-.337.538-.65.704-1.08c.19-.493.296-1.02.332-1.8c.052-1.104.058-1.49.058-4.029c0-2.474-.007-2.878-.058-4.029c-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06c1.065.05 1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465c-1.066.047-1.405.06-4.122.06c-2.717 0-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153a4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-faiz-al-ghozi-2596bb206/"
            target={"_blank"}
          >
            <svg
              className="text-[#BFBFBF] h-6"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545v5.238ZM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44Zm1.484 10.85h-2.97V7.5h2.97v9.543ZM18.521 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0h.003Z"
              />
            </svg>
          </a>
          <div className="h-40 w-0.5 bg-gray-300"></div>
        </aside>
        <div>
          <h3 className="text-xl font-semibold text-[#707070]">Hi, I'm</h3>
          <h1 className="text-4xl text-blue-theme font-bold capitalize my-3">
            muhammad faiz al ghozi
          </h1>
          <p>
            My name is Muhammad Faiz Al Ghozi. I have 6 months internship
            experience at a start-up. I am a final semester high school student.
            My future plan is to have a career as a software developer at a
            start-up.
          </p>
          <button className="bg-blue-theme font-semibold rounded-full text-white px-6 my-4 py-2.5 transition hover:scale-110">
            Download CV
          </button>
        </div>
      </article>
      <article>
        <Lottie
          height={380}
          width={600}
          options={{
            // loop: true,
            // autoplay: true,
            animationData: codeAnimation,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </article>
    </section>
  );
}
