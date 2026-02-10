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
            "Contributed to the development and maintenance of 5 apps serving approximately 150,000 PT Pertamina employees and their families, with a strong focus on system stability, performance, and scalability.",
            "Developed backend services using Golang and NestJS, as well as frontend applications using Next.js, to support large-scale healthcare operations.",
            "Designed a mechanism for large-scale data downloads and processing using Python with a period-based cron job approach, ensuring efficient execution without overloading CPU or production databases.",
            "Involved in the development of an AI-powered system to accelerate healthcare data verification and data entry from printed documents, focusing on backend development using Golang and system integration.",
            "Collaborated with stakeholder to ensure backend services were well integrated and could be effectively used within operational workflows."
          ]}
        />
        <Stepper
          from={"September 2024"}
          until={"June 2025"}
          title={"Backend Developer (Freelance)"}
          company={"PT. Viktorindo Teknologi Prima"}
          desc={[
            "Developed the backend of an online visa application website using NestJS, handling core functionalities and data processing.",
            "Set up the deployment environment on a virtual machine (VM) to test and run the application during development.",
            "Focused on backend design and implementation, ensuring the system was robust and maintainable for future production rollout.",
          ]}
        />
        <Stepper
          from={"Augustus 2022"}
          until={"January 2023"}
          title={"IT Developer (Internship)"}
          company={"PT. Graha Digital Pratama (Digital Buana)"}
          desc={[
            "Developed and maintained the ticketing website for Mandalika Circuit, ensuring the system could handle high traffic during events.",
            "Built a ticket scanning application for Mandalika Circuit, enabling fast and accurate check-in processes.",
            "Developed a website for the Ministry of Tourism, focusing on functionality and user experience.",
            "Contributed to full-stack development, handling backend APIs, database management, and frontend implementation with modern technologies."
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
        <h1 className="font-semibold lg:text-2xl text-xl my-2">{title}</h1>
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
