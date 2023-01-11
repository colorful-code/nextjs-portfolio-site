import { useForm } from '@formcarry/react';

function ContactForm({bgColor, borderColor}) {
  const {state: formcarryState, submit: formcarrySubmit} = useForm({
	id: 'zslEjawD4'
  });

  if (formcarryState.submitted) {
    return <div>Thank you! We received your submission.</div>;
  }

  return (
    <form className={`flex flex-col space-y-4 w-full ${bgColor} p-4 border ${borderColor} rounded-xl onSubmit={formcarrySubmit}`}>
		<div>
			<label className="font-semibold" htmlFor="name">Name:</label>
			<input className="p-1 shadow-inner rounded-sm  focus:outline-none focus:ring focus:ring-blue-500 w-full" id="name" type="text" name="text" placeholder="Name" />
		</div>

		<div>
			<label className="font-semibold" htmlFor="subject">Subject:</label>
			<input className="p-1 shadow-inner rounded-sm  focus:outline-none focus:ring w-full" id="subject" type="text" name="subject" placeholder="Subject"/>
		</div>

		<div>
		<label className="font-semibold" htmlFor="email">Email:</label>
		<input className="p-1 shadow-inner rounded-sm  focus:outline-none focus:ring w-full" id="email" type="email" name="email" placeholder="Email"/>
		</div>

		<div>
		<label className="font-semibold " htmlFor="message">Message:</label>
		<textarea className="p-1 shadow-inner p-2 rounded-sm h-32 resize-none focus:outline-none focus:ring w-full" id="message" name="message" placeholder="Enter your message..." />
		</div>

		<div className='flex justify-center'>
			<button className="border py-2 px-5 rounded-lg self-center focus:outline-none focus:ring- w-3/5 sm:w-full" type="submit">Send</button>
		</div>

    </form>
  );
}

export default ContactForm