import Card from "../fragments/card";

export default function Services() {
  return (
    <section id="services" className="lg:px-20 px-10 lg:mt-20 mt-24 pb-10">
      <h1
        className="lg:text-4xl text-3xl font-bold lg:text-right"
        data-aos="fade-left"
      >
        <span className="text-[#FF644D]">Let's</span> work together!{" "}
        <span className="text-[#FF644D]">Discover</span> the {""}
        <br className="lg:inline-block hidden" />
        services i can offer
      </h1>
      <div
        className="grid lg:grid-cols-3 mt-10 lg:gap-x-10 gap-y-5"
        data-aos="fade-up"
      >
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="lg:h-8 lg:w-8 h-7 w-7 text-[#FF644D]"
            >
              <path
                fill="currentColor"
                d="M4 2a2 2 0 0 0-2 2v5.997a2 2 0 0 0 2 2h2.005v1.011H4.506a.5.5 0 0 0 0 1h6.996a.5.5 0 1 0 0-1h-1.5v-1.01H12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm5.003 9.997v1.011H7.005v-1.01zM3 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.997a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
              ></path>
            </svg>
          }
          title={"web development"}
          desc={
            "Utilized my expertise in web development to craft dynamic websites infused with seamlessly integrated APIs, thereby enhancing functionality and delivering exceptional user experiences."
          }
        />
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
              className="h-6 w-6 text-[#FF644D]"
            >
              <path
                fill="none"
                stroke="currentColor"
                d="M6 11.5h3m-5.5 3h8a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              ></path>
            </svg>
          }
          title={"mobile development"}
          desc={
            "Crafted innovative mobile applications leveraging cutting-edge technologies and intuitive user interfaces, ensuring seamless integration with backend systems for enhanced performance and user satisfaction."
          }
        />
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="lg:h-7 lg:w-7 h-6 w-6 text-[#FF644D]"
            >
              <g fill="currentColor">
                <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4z"></path>
                <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.5 6.5 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8s-3.809-.317-5.208-.876a6.5 6.5 0 0 1-1.458-.79z"></path>
                <path d="M14.667 11.668a6.5 6.5 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876c-1.966 0-3.809-.316-5.208-.876a6.5 6.5 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667z"></path>
              </g>
            </svg>
          }
          title={"backend development"}
          desc={
            "Specialized in backend development, employing advanced frameworks and architecture to ensure seamless data management and optimal performance for your applications."
          }
        />
      </div>
    </section>
  );
}
