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
            "Developing mobile applications using React Native.",
            "Building and managing backend services with NestJS.",
            "Designing and implementing web frontend using Next.js.",
            "Creating SQL queries for reporting and data analysis needs.",
            "Providing technical support and training for end users.",
          ]}
        />
        <Stepper
          from={"September 2024"}
          until={"present"}
          title={"Backend Developer (Freelance)"}
          company={"PT. Viktorindo Teknologi Prima"}
          desc={[
            "Developing backend services using NestJS.",
            "Deploying projects on Ubuntu server.",
            "Collaborating with frontend developers to integrate user-facing elements.",
            "Implementing RESTful APIs for data access and manipulation.",
          ]}
        />
        <Stepper
          from={"Augustus 2022"}
          until={"January 2023"}
          title={"IT Developer (Internship)"}
          company={"PT. Graha Digital Pratama (Digital Buana)"}
          desc={[
            "Developed frontend and backend solutions using Next.js, Vue.js, Nuxt.js, Laravel, and Flutter across various projects.",
            "Collaborated with teams to deliver customized IT solutions for diverse clients.",
            "Contributed to both web and mobile application development, addressing client needs in various industries.",
          ]}
        />
      </div>
    </section>
  );
}

function Stepper({ from, until, title, company, desc }) {
  return (
    <div className="flex space-x-5 mb-7">
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
