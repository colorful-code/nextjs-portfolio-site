import { useForm } from "@formcarry/react";
import { FaCheck } from "react-icons/fa";

function ContactForm({ bgColor, sendBtnBorderColor, sendBtnBg }) {
  const { state: formcarryState, submit: formcarrySubmit } = useForm({
    id: "zslEjawD4",
  });

  if (formcarryState.submitted) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-fit p-2 ring-1 rounded-xl ring-black bg-opacity-70 bg-white animate-bounceIn animate-duration-[1.4s]">
        <p className="text-sm lg:text-lg text-black font-semibold text-center">
          Thank you! Message sent.
        </p>
        <FaCheck className="text-xl lg:text-6xl fill-emerald-500" />
      </div>
    );
  }

  const labelStyle = "font-semibold text-slate-300";

  return (
    <form
      className={`flex flex-col space-y-4 w-full bg-${bgColor} p-4 rounded-xl`}
      onSubmit={formcarrySubmit}
    >
      <div>
        <label className={labelStyle} htmlFor="name">
          Name:
        </label>
        <input
          className="p-1 shadow-inner rounded-md bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-700 w-full"
          id="name"
          type="text"
          name="text"
          placeholder=""
          required
        />
      </div>

      <div>
        <label className={labelStyle} htmlFor="subject">
          Subject:
        </label>
        <input
          className="p-1 shadow-inner rounded-md bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-700 w-full"
          id="subject"
          type="text"
          name="subject"
          placeholder=""
          required
        />
      </div>

      <div>
        <label className={labelStyle} htmlFor="email">
          Email:
        </label>
        <input
          className="p-1 shadow-inner rounded-md bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-700 w-full"
          id="email"
          type="email"
          name="email"
          placeholder=""
          required
        />
      </div>

      <div>
        <label className={labelStyle} htmlFor="message">
          Message:
        </label>
        <textarea
          className="p-1 shadow-inner rounded-md bg-offWhite focus:bg-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-slate-700 w-full"
          id="message"
          name="message"
          placeholder="Enter your message..."
          required
        />
      </div>

      <div className="flex justify-center">
        <button
          className={`border border-${sendBtnBorderColor} shadow-md py-2 px-5 rounded-lg self-center hover:bg-indigo-300 active:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-slate-700 w-3/5 bg-${sendBtnBg} lg:w-full`}
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
