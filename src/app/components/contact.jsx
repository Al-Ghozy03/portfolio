import { useForm } from "react-hook-form";
import Button from "../fragments/button";

export default function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const message = `sent by ${data.email} \n ${data.message}`;
    const mailTo = `mailto:kiritod366@gmail.com?&subject=${data.subject}&body=${message}`;
    window.location.href = mailTo;
  };
  return (
    <section
      id="contact"
      className="lg:flex lg:px-20 px-10 lg:mt-24 mt-16 lg:justify-between"
    >
      <div data-aos="fade-right">
        <h1 className="lg:text-4xl text-3xl font-bold text-[#FF644D]">
          Contact <span className="text-black">me</span>
        </h1>
        <p className="lg:text-xl mt-2 leading-6">
          Feel free to contact me for any
          <br />
          questions or business inquiries
        </p>
      </div>
      <div
        className="bg-white shadow-xl rounded-3xl lg:px-8 px-5 py-5 lg:w-1/2 w-full lg:mt-0 mt-4"
        data-aos="fade-up"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold text-lg mb-1">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                className="outline-none lg:h-12 h-10 pl-3 rounded-lg border-2"
                placeholder="Type here...."
              />
              {errors?.email && (
                <p className="text-red-500 text-sm mt-2">Email is required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="font-semibold text-lg mb-1">
                Subject
              </label>
              <input
                {...register("subject", { required: true })}
                type="text"
                id="subject"
                className="outline-none lg:h-12 h-10 pl-3 rounded-lg border-2"
                placeholder="Type here...."
              />
              {errors?.subject && (
                <p className="text-red-500 text-sm mt-2">Subject is required</p>
              )}
            </div>

            <div className="flex flex-col lg:col-span-2">
              <label htmlFor="message" className="font-semibold text-lg mb-1">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                className="outline-none pl-3 rounded-lg resize-none h-60 pt-4 border-2"
                placeholder="Type here...."
              ></textarea>
              {errors?.message && (
                <p className="text-red-500 text-sm mt-2">Message is required</p>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <Button className={"lg:w-1/5 w-full mt-5"}>Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
