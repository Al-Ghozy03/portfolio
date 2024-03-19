import Button from "../fragments/button";

export default function Contact() {
  return (
    <section id="contact" className="flex px-20 mt-24 justify-between">
      <div data-aos="fade-right">
        <h1 className="text-4xl font-bold text-[#FF644D]">
          Contact <span className="text-black">me</span>
        </h1>
        <p className="text-xl mt-2 leading-6">
          Feel free to contact me for any
          <br />
          questions or business inquiries
        </p>
      </div>
      <div className="bg-white shadow-xl rounded-3xl px-8 py-5 w-1/2" data-aos="fade-up">
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="outline-none h-12 pl-3 rounded-lg border-2"
              placeholder="Type here...."
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="font-semibold text-lg mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="outline-none h-12 pl-3 rounded-lg border-2"
              placeholder="Type here...."
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="message" className="font-semibold text-lg mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="outline-none pl-3 rounded-lg resize-none h-60 pt-4 border-2"
              placeholder="Type here...."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <Button className={"w-1/5 mt-5"}>Submit</Button>
        </div>
      </div>
    </section>
  );
}
