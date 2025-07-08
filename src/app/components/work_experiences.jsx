export default function WorkExperiences() {
  return (
    <section
      id="work-experience"
      className="lg:px-20 px-10 lg:mt-36 mt-28 lg:flex lg:space-x-52"
    >
      <h1
        className="lg:text-4xl text-3xl font-bold text-[#FF644D] lg:mb-0 mb-3"
        data-aos="fade-right"
      >
        Work <span className="text-black">Experiences</span>
      </h1>
      <div className="flex flex-col" data-aos="fade-up">
        <Stepper
          from={"July 2023"}
          until={"present"}
          title={"Software Engineer"}
          company={"PT. Pertamina Training and Consulting"}
          desc={[
            "Developing and maintaining responsive user interfaces using React.js, Next.js, and Tailwind CSS, integrating seamlessly with backend APIs.",
            "Building and optimizing RESTful APIs using Golang and NestJS, enabling efficient data flow between frontend and backend systems.",
            "Collaborating with system analysts in an Agile environment to deliver new features, fix bugs, and support onboarding for internal and external users.",
          ]}
        />
        <Stepper
          from={"September 2024"}
          until={"June 2025"}
          title={"Backend Developer (Freelance)"}
          company={"PT. Viktorindo Teknologi Prima"}
          desc={[
            "Developed backend services using NestJS to support web and mobile applications.",
            "Deployed and maintained backend applications on Ubuntu servers.",
            "Collaborated closely with frontend developers to ensure seamless integration between backend logic and user interfaces.",
          ]}
        />
        <Stepper
          from={"Augustus 2022"}
          until={"January 2023"}
          title={"IT Developer (Internship)"}
          company={"PT. Graha Digital Pratama (Digital Buana)"}
          desc={[
            "Built and maintained responsive web interfaces using React.js, Next.js, Vue.js, and Nuxt.js, optimized for performance and user experience.",
            "Developed backend solutions using Laravel and Node.js, including designing RESTful APIs, database schemas, and core business logic for web and mobile platforms.",
            "Collaborated on fullstack architecture across industries such as government and services, ensuring smooth integration between frontend components and backend systems.",
          ]}
        />
      </div>
    </section>
  );
}

function Stepper({ from, until, title, company, desc }) {
  return (
    <div className="flex space-x-5 mb-7 w-3/4 text-justify">
      <div className="flex flex-col items-center">
        <div className="h-5 w-5 rounded-full bg-[#FF644D]" />
        <div className="w-0.5 h-full bg-[#FF644D]" />
      </div>
      <div>
        <p className="lg:text-base text-sm">
          {from} - {until}
        </p>
        <h1 className="font-semibold lg:text-2xl text-xl">{title}</h1>
        <p className="lg:text-base text-sm">{company}</p>
        <ul className="list-disc ml-5 mt-3">
          {desc.map((v, k) => (
            <li className="lg:text-base text-sm" key={k}>
              {v}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
