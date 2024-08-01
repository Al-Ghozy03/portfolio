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
            "Working with React JS, Next JS, and React Native",
            "Participate in developing Allcare System",
            "Socializing the use of Allcare System to the provider",
          ]}
        />
        <Stepper
          from={"Augustus 2022"}
          until={"January 2023"}
          title={"IT Developer (Internship)"}
          company={"PT. Graha Digital Pratama (Digital Buana)"}
          desc={[
            "Developed 3 websites in 6 months internship",
            "Working with React JS, Next JS, Node JS, and Flutter",
            "Working with DevOps team",
            "Participate in developing government websites projects",
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
