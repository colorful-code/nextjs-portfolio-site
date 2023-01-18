import { useForm } from '@formcarry/react';

function ContactForm({bgColor, sendBtnBorder, sendBtnBg}) {
  const {state: formcarryState, submit: formcarrySubmit} = useForm({
	id: 'zslEjawD4'
  });

  if (formcarryState.submitted) {
    return <div>Thank you! We received your submission.</div>;
  }

  const labelStyle = "font-semibold text-slate-300"

  return (
    <form className={`flex flex-col space-y-4 w-full ${bgColor} p-4 rounded-xl onSubmit={formcarrySubmit}`}>
		<div>
			<label className={labelStyle} htmlFor="name">Name:</label>
			<input className="p-1 shadow-inner rounded-md  focus:outline-none focus:ring focus:ring-gray-700 w-full" id="name" type="text" name="text" placeholder="" />
		</div>

		<div>
			<label className={labelStyle} htmlFor="subject">Subject:</label>
			<input className="p-1 shadow-inner rounded-md  focus:outline-none focus:ring focus:ring-gray-700 w-full" id="subject" type="text" name="subject" placeholder=""/>
		</div>

		<div>
		<label className={labelStyle} htmlFor="email">Email:</label>
		<input className="p-1 shadow-inner rounded-md  focus:outline-none focus:ring focus:ring-gray-700 w-full" id="email" type="email" name="email" placeholder=""/>
		</div>

		<div>
		<label className={labelStyle} htmlFor="message">Message:</label>
		<textarea className="p-1 shadow-inner rounded-md h-32 resize-none focus:outline-none focus:ring focus:ring-gray-700 w-full" id="message" name="message" placeholder="Enter your message..." />
		</div>

		<div className='flex justify-center'>
			<button className={`border ${sendBtnBorder} shadow-md py-2 px-5 rounded-lg self-center focus:outline-none focus:ring focus:ring-gray-700 w-3/5 ${sendBtnBg} sm:w-full`} type="submit">Send</button>
		</div>

    </form>
  );
}

export default ContactForm