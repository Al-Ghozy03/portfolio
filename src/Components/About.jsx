import Lottie from "react-lottie";
import ig from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";
import codeAnimation from "../Assets/108333-coding.json";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-between pt-32 lg:px-8 items-center space-x-6"
    >
      <article className="flex space-x-6">
        <aside className="space-y-3 flex flex-col items-center w-20">
          <div className="h-40 w-0.5 bg-gray-300"></div>
          <img src={ig} alt={ig} className="h-6 w-6" />
          <img src={linkedin} alt={linkedin} className="h-6 w-6" />
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
          <button className="bg-blue-theme font-semibold rounded-full text-white px-6 my-4 py-2.5">
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
