import Title from "./Title";

export default function Contact() {
  return (
    <section id="contact_me" className="my-20 lg:px-16 px-10">
      <Title>Contact me</Title>
      <p className="text-center lg:px-40 mb-5 mt-2 lg:text-base text-sm">
        Please email me above or fill out the form below to request a quote for
        a project, inquire about a collaboration, or simply say hello. I’m also
        happy to refer you to someone else for a specific project need! I love
        to connect people.
      </p>
      <form>
        <div className="grid lg:grid-cols-2 lg:gap-x-7 gap-y-4 ">
          <input
            type="email"
            className="bg-[#EFF2F8] h-11 pl-4 rounded-md outline-none"
            placeholder="Email"
          />
          <input
            type="text"
            className="bg-[#EFF2F8] h-11 pl-4 rounded-md outline-none"
            placeholder="Name"
          />
          <textarea
            className="resize-none h-52 lg:col-span-2 bg-[#EFF2F8] rounded-md pl-4 py-3 outline-none"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-theme font-semibold rounded-full text-white px-6 my-4 py-2.5 transition hover:scale-110">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
